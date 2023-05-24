import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { MinkowskiService } from '../minkowski.service';


enum LineModes {
  COINCIDENT = "Coincident",
  SIMULTANEOUS = "Simultaneous",
  LIGHT_CONE = "Light Cone",
  NONE = "Off"
}

interface PlacedPoint {
  point: number[];
  mode: LineModes;
  refs: number[];
}

@Component({
  selector: 'app-minkowski',
  templateUrl: './minkowski.component.html',
  styleUrls: ['./minkowski.component.scss']
})
export class MinkowskiComponent {

  public epsilon = 1*Math.PI/180///about 2deg;
  public strokeWidth = 2;
  public graphPadding = 12;
  public numTicks = 5;
  public dotSize = 4;
  public backgroundColor = "cornflowerblue";
  public graphOrigin: number[];
  public canvasBoundingRect: DOMRect;

  public alpha = 0.7;
  public refernceFrameAngles: number[] = [];
  public hoveredFrames: number[] = [];
  public heldFrame: number | undefined;

  public gridFrames: number[] = [];
  public cursorFrames: number[] = [];

  public placedNormals: PlacedPoint[] = [];

  public lineMode: LineModes = LineModes.NONE;
  public cursorMode: LineModes = LineModes.SIMULTANEOUS;
  public lineModes = Object.values(LineModes);

  public referenceFramesLocked: boolean = false;
  
  @ViewChild('canvas', {static: true})
  private canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  public constructor(public mService: MinkowskiService, private _cdr: ChangeDetectorRef) {
    this.canvasBoundingRect = new DOMRect(0, 0, this.alpha*window.innerWidth, this.alpha*window.innerHeight);
    this.pushToAll(0);
    this.pushToAll(Math.PI/8);
  }

  public pushToAll(theta: number) {
    this.refernceFrameAngles.push(theta);
    this.gridFrames.push(theta);
    this.cursorFrames.push(theta);
  }
  
  ngAfterViewInit(): void {
    var ctx = this.canvas.nativeElement.getContext('2d');
    if (!!ctx){
      this.ctx = ctx;
      this.checkBoundingRect();
      this.drawReferenceFrames();
      this._cdr.detectChanges();
      this.draw(0);
    }
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    this.checkBoundingRect();
    this.draw(0);
  }

  @HostListener('mousemove', ['$event']) 
  public onMouseMove(event: { clientX: any; clientY: any; }) {
    this.checkBoundingRect();
    let x = event.clientX - this.canvasBoundingRect.left;
    let y = event.clientY - this.canvasBoundingRect.top;
    let mouseAngle = this.mService.get_angle_from_origin(x,y)
    
    if (this.mService.isInGraph([x,y])) {
      this.clear();
      if (!!this.heldFrame){
        this.moveHeldFrame(mouseAngle);
      }
      if (!this.referenceFramesLocked){
        this.checkHovered(mouseAngle);
      }
        
      if (this.mService.isInGraph([x,y])) {
          this.drawCrosshairs(x,y);
        }
      this.draw(mouseAngle);
    }
  }

  @HostListener('mousedown', ['$event']) 
  public onMouseDown(event: { clientX: any; clientY: any; }) {
    this.heldFrame = undefined
    let x = event.clientX - this.canvasBoundingRect.left;
    let y = event.clientY - this.canvasBoundingRect.top;
    let mouseAngle = this.mService.get_angle_from_origin(x,y)

    if (this.mService.isInGraph([x,y])) {
      if(!this.heldFrame) {
        if (this.hoveredFrames.some(x =>  Math.abs(x - mouseAngle) < this.epsilon)) {
          this.holdFrame(mouseAngle);
        }else {
          this.placeNormal(x,y);
        }
      }
    }
  }

  @HostListener('mouseup', ['$event']) 
  public onMouseUp(event: { clientX: any; clientY: any; }) {
    let x = event.clientX - this.canvasBoundingRect.left;
    let y = event.clientY - this.canvasBoundingRect.top;
    let mouseAngle = this.mService.get_angle_from_origin(x,y);

    if (this.mService.isInGraph([x,y])) {
      if (!!this.heldFrame) {
        this.clear();
        this.refernceFrameAngles = this.refernceFrameAngles.filter((val) => Math.abs(val - mouseAngle) > this.epsilon || val == 0);
        this.refernceFrameAngles.push(mouseAngle);
        this.gridFrames.push(mouseAngle);
        this.cursorFrames.push(mouseAngle);
        this.heldFrame = undefined
        this.hoveredFrames = this.hoveredFrames.filter((val) => Math.abs(val - mouseAngle) > this.epsilon);
      }
    }
    this.draw(mouseAngle);
  }

  public checkBoundingRect() {
    let rect = this.canvas.nativeElement.getBoundingClientRect();
    let x = Math.min(Math.round(rect.x), this.alpha*window.innerWidth);
    let y = Math.min(Math.round(rect.y), this.alpha*window.innerHeight);
    let w = Math.min(Math.round(rect.width), this.alpha*window.innerWidth);
    let h = Math.min(Math.round(rect.height), this.alpha*window.innerHeight);
    let minDim = Math.min(w, h);
    let newRect = new DOMRect(x,y,minDim,minDim);
    if (this.canvasBoundingRect.x != newRect.x || this.canvasBoundingRect.y != newRect.y || this.canvasBoundingRect.height  != newRect.width|| this.canvasBoundingRect.width!= newRect.width) {
      this.canvasBoundingRect = newRect;
      this.mService.setGraphWidth(this.canvasBoundingRect.width);
      this.mService.setGraphHeight(this.canvasBoundingRect.height);
      this.mService.setGraphPadding(this.graphPadding);
    }
  }


  public holdFrame(mouseAngle: number): void {
    this.hoveredFrames = this.hoveredFrames.filter((val) => Math.abs(val - mouseAngle) > this.epsilon);
    this.refernceFrameAngles = this.refernceFrameAngles.filter((val) => Math.abs(val - mouseAngle) > this.epsilon || val == 0);
    this.heldFrame = mouseAngle;
  }

  public moveHeldFrame(mouseAngle: number): void {
    this.heldFrame = mouseAngle;
    this.refernceFrameAngles = this.refernceFrameAngles.filter((val) => Math.abs(val - mouseAngle) > this.epsilon);
    this.refernceFrameAngles.push(mouseAngle);

    if (this.gridFrames.some((val) => Math.abs(val - mouseAngle) > this.epsilon)){
      this.gridFrames = this.gridFrames.filter((val) => Math.abs(val - mouseAngle) > this.epsilon);
      this.gridFrames.push(mouseAngle);
    }
    if (this.cursorFrames.some((val) => Math.abs(val - mouseAngle) > this.epsilon)){
      this.cursorFrames = this.cursorFrames.filter((val) => Math.abs(val - mouseAngle) > this.epsilon);
      this.cursorFrames.push(mouseAngle);
    }
  }

  public placeNormal(x: number, y: number): void {
    this.placedNormals = this.placedNormals.filter(n => n.point[0] != x 
      || n.point[1] != y 
      || n.mode != this.cursorMode 
      || n.refs.some(v => !this.cursorFrames.includes(v)));
    this.placedNormals.push({point: [x,y], mode: this.cursorMode, refs: this.cursorFrames});
  }

  public draw(mouseAngle: number): void {
    this.drawNormals();
    this.drawReferenceFrames();
    if (!!this.heldFrame){
      this.drawReferenceFrame(mouseAngle, "blue", this.strokeWidth)
      this.drawReferenceFrame(0, "black", this.strokeWidth)
    }

  }

  public clear(): void {
    this.ctx.clearRect(0,0,this.mService.canvasW,this.mService.canvasH);
  }

  public checkHovered(mouseAngle: number): void {
    this.refernceFrameAngles.filter(theta => theta != 0).forEach(theta => {
      this.hoveredFrames = this.hoveredFrames.filter((val) => Math.abs(val - theta) > this.epsilon);
      //Mouse Enter / Mouse Leave
      if (Math.abs(theta - mouseAngle) < this.epsilon || Math.abs((Math.PI/2 - theta) - mouseAngle) < this.epsilon){
        this.hoveredFrames.push(theta);
      }
    })
  }

  public drawLineFromOrigin(theta: number, stroke: string, strokeWidth: number): void {
    this.drawLinePA(this.mService.graphOrigin, theta, stroke, strokeWidth)
  }

  public drawLineP2P(point1: number[], point2: number[], stroke: string, strokeWidth: number): void {
    this.ctx.beginPath()
    this.ctx.moveTo(point1[0], point1[1])
    this.ctx.lineTo(point2[0], point2[1])
    this.ctx.lineWidth = strokeWidth;
    this.ctx.strokeStyle = stroke
    this.ctx.stroke()
  }

  public drawLinePA(point: number[], theta: number, stroke: string, strokeWidth: number, ignoreP2: boolean = false): void {
    let borderIntersections = this.mService.getBorderIntersections(point, theta);
    this.drawLineP2P(point,borderIntersections[0], stroke, strokeWidth);
    if (!ignoreP2) {
      this.drawLineP2P(borderIntersections[1],point, stroke, strokeWidth);
    }
  }

  public drawReferenceFrame(theta: number, stroke: string, strokeWidth: number): void {
    let H = this.mService.canvasH;
    let W = this.mService.canvasW;
    let borderIntersections = this.mService.getBorderIntersections(this.mService.graphOrigin, theta);
    let p0 = borderIntersections[0];
    let mirrorP0 = [W - p0[1], H - p0[0]];
    let arrowLength = 10;
    let arrowAngle1 = Math.PI - theta + Math.PI/4;
    let arrowAngle2 = Math.PI - theta - Math.PI/4;

    //line 1
    this.drawLineFromOrigin(theta, stroke, strokeWidth);
    this.drawReferenceFrameTicks(theta, this.numTicks);
    //lil arrow
    this.drawLineP2P(p0, [p0[0] + arrowLength*Math.sin(arrowAngle1), p0[1] - arrowLength*Math.cos(arrowAngle1)], stroke, strokeWidth)
    this.drawLineP2P(p0, [p0[0] - arrowLength*Math.sin(arrowAngle2), p0[1] + arrowLength*Math.cos(arrowAngle2)], stroke, strokeWidth)
    
    let arrowAngle3 = Math.PI/2 - theta + Math.PI/4;
    let arrowAngle4 = theta - Math.PI/4;
    //line 2
    this.drawLineFromOrigin(Math.PI/2 -  theta, stroke, strokeWidth);
    //lil arrow
    this.drawLineP2P(mirrorP0, [mirrorP0[0] - arrowLength*Math.cos(arrowAngle3), mirrorP0[1] + arrowLength*Math.sin(arrowAngle3)], stroke, strokeWidth)
    this.drawLineP2P(mirrorP0, [mirrorP0[0] - arrowLength*Math.cos(arrowAngle4), mirrorP0[1] - arrowLength*Math.sin(arrowAngle4)], stroke, strokeWidth)
  }

  public clearNormals(): void {
    this.placedNormals = [];
    this.clear();
    this.drawReferenceFrames();
  }
  
  public drawCrosshairs(x: number, y: number): void {
    let point = [x,y];
    this.refernceFrameAngles.forEach(theta => {
      if (this.cursorFrames.includes(theta)){
        this.drawCrosshair(point, theta, "orange", "orange", this.cursorMode);
      }
    });
  }

  private drawCrosshair(point: number[], theta: number, dotColor:string = "orange", lineColor: string = "orange", lineMode: LineModes){
    this.drawDot(point, this.dotSize, dotColor);
      if(lineMode == LineModes.SIMULTANEOUS) {
        this.drawLinePA(point, Math.PI/2 - theta , lineColor, this.strokeWidth/2)
        this.drawLinePA(point, theta , lineColor, this.strokeWidth/2)
      }

      if (lineMode == LineModes.COINCIDENT) {
        this.drawLinePA(point,theta - Math.PI/2, lineColor, this.strokeWidth/2)
        this.drawLinePA(point, Math.PI - theta , lineColor, this.strokeWidth/2)
      }
    if (lineMode == LineModes.LIGHT_CONE) {
      this.drawLinePA(point, Math.PI/4, lineColor, this.strokeWidth/2, true)
      this.drawLinePA(point, 3*Math.PI/4, lineColor, this.strokeWidth/2, true)
    }
  }

  public drawNormals(): void {
    this.placedNormals.forEach(n => {
      this.refernceFrameAngles.forEach(theta => {
        if (n.refs.includes(theta)){
          this.drawCrosshair(n.point,theta,"orange", "orange", n.mode);
        }
      });

      if (!!this.heldFrame) {
        this.drawCrosshair(n.point,this.heldFrame, "orange", "orange", this.cursorMode);
        this.drawCrosshair(n.point,Math.PI/2-this.heldFrame, "orange", "orange", this.cursorMode);
      }
    });
  }

  public drawReferenceFrames(): void {
    this.refernceFrameAngles.forEach(theta => {
      if (this.hoveredFrames.some(f => Math.abs(f - theta) < this.epsilon)){
        this.drawReferenceFrame(theta, "blue", this.strokeWidth);
      } else {
        this.drawReferenceFrame(theta, "black", this.strokeWidth);
      }
    });
  }
  
  private drawDot(center: number[], size:number, fill: string): void {
    let deltaX = this.mService.canvasW/(this.numTicks);
    let deltaY = this.mService.canvasH/this.numTicks;
    let x = Math.round((center[0] - this.mService.graphOrigin[0])/deltaX * 100) / 100;
    let y = Math.round(-(center[1] - this.mService.graphOrigin[1])/deltaY * 100) / 100;
    let lbl = `(${x},${y})`;
    this.ctx.beginPath();
    this.ctx.arc(center[0], center[1], size, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = fill;
    this.ctx.fill();
    this.ctx.fillText(lbl, center[0] + this.dotSize, center[1] + 2*this.dotSize);
  }

  public drawReferenceFrameTicks(theta: number, n: number): void {
    let H = this.mService.canvasH;
    let W = this.mService.canvasW;

    let intersections: number[][] = this.mService.getHyperbolicIntersections(theta, n);
    for(let point of intersections){
      let mirrorP = [W - point[1], H - point[0]];
      if (this.gridFrames.includes(theta)){
        this.drawCrosshair(point, theta, "black", "grey", this.lineMode);
        this.drawCrosshair(mirrorP, theta, "black", "grey", this.lineMode);
      } else {
        this.drawDot(point,this.dotSize,"black");
        this.drawDot(mirrorP,this.dotSize,"black");
      }
    }
  }

  public addReferenceFrame(): void {
    this.refernceFrameAngles.push(Math.PI/8);
  }

  public onCursorShowingChange(theta: number, checked: boolean){
    this.cursorFrames = this.cursorFrames?.filter((val) => Math.abs(val - theta) > this.epsilon) || [];
    if (checked) {
      this.cursorFrames.push(theta);
    }
    this.clear();
    this.draw(theta);

  }
  
  public onLineShowingChange(theta: number, checked: boolean){
    this.gridFrames = this.gridFrames?.filter((val) => Math.abs(val - theta) > this.epsilon) || [];
    if (checked) {
      this.gridFrames.push(theta);
    }
    this.clear();
    this.draw(0);
  }

  public onTickChange(){
    this.clear();
    this.draw(0);
  }

  public getDegreeStr(theta: number): string {
    return (Math.round((theta*180/Math.PI)*100)/100).toString() + "°";
  }

  public lockReferenceFrames(): void {
    this.referenceFramesLocked = !this.referenceFramesLocked;
  }
}
