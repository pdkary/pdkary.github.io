import { ChangeDetectorRef, Component, ElementRef, ViewChild, HostListener, Input } from '@angular/core';
import * as math from 'mathjs';
const FLOAT_MAX = 3.40282e+38;

export enum CursorModes {
  PARRALEL = "Parallel",
  PERPENDICULAR = "Perpendicular",
  LIGHT_CONE = "Light Cone",
  NONE = "Off"
}

@Component({
  selector: 'kary-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  public dotSize: number = 5;
  public strokeWidth: number = 3;
  public canvasPadding: number = 20;

  @Input()
  public functionPrecision: number = 2;
  
  @Input()
  public lorenzAngle = 0;
  
  @Input()
  public xStart: number = 0;
  @Input()
  public xEnd: number = 10;
  @Input()
  public yStart: number = 0;
  @Input()
  public yEnd: number = 10;
  
  @Input()
  public gridLines: boolean = false;
  @Input()
  public lorenzGridLines: boolean = true;
  @Input()
  public cursorLines: boolean = false;
  @Input()
  public lorenzCursorLines: boolean = false;
  @Input()
  public cursorMode: CursorModes = CursorModes.PARRALEL; 
  
  public alpha = 0.9;
  public canvasBoundingRect: DOMRect;

  public canvasW: number;
  public canvasH: number;
  public canvasOrigin: number[];

  public funcStrings: string[] = ["f(x)=x", "f(x)=sin(x)"];
  public functions: any[] = [];
  public functionInverted: boolean[] = [false, true];
  public functionColors: string[] = ["blue", "red"];

  public pi: number = Math.PI;
  
  @ViewChild('canvas', {static: true})
  private canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;
  private parser: math.Parser = math.parser();

  public get xRange(): number {
    return this.xEnd + 1 - this.xStart;
  }

  public get yRange(): number {
    return this.yEnd + 1 - this.yStart;
  }

  public constructor(private _cdr: ChangeDetectorRef) {
    this.canvasW = this.alpha*window.innerWidth;
    this.canvasH = this.alpha*window.innerHeight;
    this.canvasBoundingRect = new DOMRect(0, 0, this.canvasW, this.canvasH);
    this.canvasOrigin = [this.canvasPadding, this.canvasH - this.canvasPadding];
  }
  
  public ngAfterViewInit(): void {
    var ctx = this.canvas.nativeElement.getContext('2d');
    if (!!ctx){
      this.ctx = ctx;
      this._cdr.detectChanges();
      this.checkBoundingRect();
      this.onInputChange({});
    }
  }

  public afterContextInit(): void {
    this.ctx.clearRect(0,0,this.canvasW,this.canvasH);
    this.drawAxes(0, this.gridLines);
    this.drawAxes(this.lorenzAngle, this.lorenzGridLines);
    for (let i = 0;i < this.functions.length;i++) {
      let f = this.functions[i];
      this.plotFunction(f,this.functionColors[i],this.lorenzAngle, this.functionInverted[i]);
    }
  }

  public onSliderChange(): void {
    this.afterContextInit();
  }

  public onInputChange(event: any): void {
    this.initFuncStrings();
    this.afterContextInit();
  }

  public onRemoveFunction(index: number): void {
    this.funcStrings.splice(index,1);
    this.functions.splice(index,1);
    this.afterContextInit();
  }

  public onAddFunction(): void {
    this.funcStrings.push("f(x)=x");
    this.functionInverted.push(false);
    this.initFuncStrings();
    this.afterContextInit();
  }
  public onInvertFunction(index: number): void {
    this.functionInverted[index] = !this.functionInverted[index];
    this.afterContextInit();
  }

  @HostListener('mousemove', ['$event']) 
  public onMouseMove(event: { clientX: any; clientY: any; }) {
    this.checkBoundingRect();
    let x = event.clientX - this.canvasBoundingRect.left;
    let y = event.clientY - this.canvasBoundingRect.top;
    if (x > 0 && y > 0 && x < this.canvasW && y < this.canvasH){
      this.afterContextInit();
      this.drawCrosshair([x,y],"orange","orange", this.cursorMode);
    }
  }

  private initFuncStrings(): void {
    this.functions = [];
    for (let funcStr of this.funcStrings){
      let node1 = math.parse(funcStr);
      let funcName = 'f';
      node1.traverse((node: any, path: any, parent: any) => {
        if (math.isFunctionAssignmentNode(node)) {
          funcName = node.name;
        } 
      })
      let typedNode = `${funcName} = typed({"number": ${node1.toString()}})`
      let func = this.parser.evaluate(typedNode);
      this.functions.push(func);
    }
  }

  public toCanvasPoint(point: number[]): number[] {
    let x = this.canvasW*(point[0] - this.xStart) / this.xRange + this.canvasOrigin[0];
    let y = this.canvasOrigin[1] - this.canvasH*(point[1] - this.yStart) / this.yRange;
    return [x,y];
  }

  public toGraphPoint(point: number[]): number[] {
    let x = this.xRange*(-this.canvasOrigin[0] + point[0])/this.canvasW + this.xStart;
    let y = this.yRange*(this.canvasOrigin[1] - point[1])/this.canvasH + this.yStart;
    return [x,y];
  }

  public drawAxes(warpAngle: number = 0, gridlines: boolean=true): void {
    this.drawDot(this.canvasOrigin,this.dotSize,"black");
    this.drawLinePA(this.canvasOrigin, warpAngle, "black", this.strokeWidth);
    this.drawLinePA(this.canvasOrigin, Math.PI/2 - warpAngle, "black", this.strokeWidth);

    for(let i = 0; i < this.xRange; i++) {
      let lorenzX = this.getLorenzXAxisPoint(warpAngle,i);
      this.drawDot(lorenzX,this.dotSize,"black");
      if (gridlines) {
        this.drawLinePA(lorenzX,Math.PI/2 - warpAngle, "black", this.strokeWidth/3);
      }
    }
    
    for(let i = 0; i < this.yRange; i++) {
      let lorenzY = this.getLorenzYAxisPoint(warpAngle,i);
      this.drawDot(lorenzY,this.dotSize,"black");
      if (gridlines) {
        this.drawLinePA(lorenzY,warpAngle, "black",this.strokeWidth/3);
      }
    }
  }

  private drawCrosshair(point: number[], dotColor:string = "orange", lineColor: string = "orange", lineMode: CursorModes){
    this.drawDot(point, this.dotSize, dotColor);
      if(lineMode == CursorModes.PARRALEL) {
        if (this.cursorLines) {
          this.drawLinePA(point, Math.PI/2 , lineColor, this.strokeWidth/2)
          this.drawLinePA(point, 0, lineColor, this.strokeWidth/2)
        }
        if (this.lorenzCursorLines){
          this.drawLinePA(point, Math.PI/2 - this.lorenzAngle , lineColor, this.strokeWidth/2)
          this.drawLinePA(point, this.lorenzAngle , lineColor, this.strokeWidth/2)
        } 
      }

      if (lineMode == CursorModes.PERPENDICULAR) {
        if (this.cursorLines) {
          this.drawLinePA(point, -Math.PI/2, lineColor, this.strokeWidth/2)
          this.drawLinePA(point, Math.PI, lineColor, this.strokeWidth/2)
        }
        if (this.lorenzCursorLines){
          this.drawLinePA(point,this.lorenzAngle - Math.PI/2, lineColor, this.strokeWidth/2)
          this.drawLinePA(point, Math.PI - this.lorenzAngle , lineColor, this.strokeWidth/2)
        } 
      }
    if (lineMode == CursorModes.LIGHT_CONE) {
      this.drawLinePA(point, Math.atan2(this.xRange, this.yRange), lineColor, this.strokeWidth/2, true)
      this.drawLinePA(point, Math.PI - Math.atan2(this.xRange, this.yRange), lineColor, this.strokeWidth/2, true)
    }
  }

  public plotFunction(y_func: Function, color:string = "black,", warpAngle: number = 0, invert=false): void {
    let graphOrigin = invert ? [this.yStart, this.xStart] : [this.xStart, this.yStart];
    let ticks = [...Array(3*this.xRange*this.functionPrecision).keys()].map((v) => this.xStart - this.xRange + v/this.functionPrecision) ;

    ticks.forEach((t: number,i: number) => {
      if (i < ticks.length-1) {
        let t_next = t + 1/this.functionPrecision;
        let f_t = y_func(t + graphOrigin[0]) - graphOrigin[1];
        let f_t_next = y_func(t_next + graphOrigin[0]) - graphOrigin[1];
        let LXY = this.getLorenzXY(warpAngle, invert ? [f_t,t] : [t,f_t]);
        let LXYnext = this.getLorenzXY(warpAngle, invert ? [f_t_next, t_next] : [t_next, f_t_next]);
        this.drawLineP2P(LXY, LXYnext, color, 2);
      }
    });
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
    let borderIntersections = this.getBorderIntersections(point, theta);
    this.drawLineP2P(point, borderIntersections[0], stroke, strokeWidth);
    if (!ignoreP2) {
      this.drawLineP2P(borderIntersections[1],point, stroke, strokeWidth);
    }
  }

  private drawDot(center: number[], size:number, fill: string): void {
    let graphPoint = this.toGraphPoint(center);
    let lbl = `(${Math.round(graphPoint[0]*100)/100},${Math.round(graphPoint[1]*100)/100})`;
    this.ctx.beginPath();
    this.ctx.arc(center[0], center[1], size, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = fill;
    this.ctx.fill();
    this.ctx.fillText(lbl, center[0] + this.dotSize, center[1] + 2*this.dotSize);
  }

  public getBorderIntersections(point:  number[], theta: number): number[][] {
    let H = this.canvasH;
    let W = this.canvasW;
    let thetaC1 = Math.atan2(point[1], W - point[0]);
    let thetaC2 = Math.atan2(H - point[1], point[0]);

    let point1 = theta > thetaC1 
        ? [point[0] + point[1]/Math.tan(theta), 0]
        : [W, point[1] - (W - point[0])*Math.tan(theta)];
        
    let point2 = theta > thetaC2 
    ? [point[0] - (H-point[1])/Math.tan(theta), H]
    : [0, point[1] + point[0]*Math.tan(theta)];

    return [point1, point2];
  }

  public getLorenzTicks(theta: number): number[][] {
    //ok so each point on our base frame will map to the reference frame
    // by the reference frame's axis' intersection with a hyperbola defined by
    // x^2 = y^2 + n^2 intersecting with y = x*tan(theta)
    // x^2 = (x^2)(tan^2(theta)) + n^2
    // (x^2)(1- tan^2(theta)) = n^2
    // x = n / sqrt(1 - tan^2(theta))
    // y = n*tan(theta) / sqrt(1 - tan^2(theta))
    // for n = (0,1,2,3,.....)
    let points = [];
    for(let i=this.xStart+1;i<=this.xEnd;i++){
      points.push(this.getLorenzXAxisPoint(theta,i));
    }
    return points
  }

  public getLorenzXAxisPoint(theta: number, x:number): number[] {
    let xSize = this.canvasW/this.xRange;
    let tanTheta = Math.tan(theta);
    let L = 1/Math.sqrt(1 - tanTheta*tanTheta);
    let x1 = x*L*xSize + this.canvasOrigin[0];
    let y1 = this.canvasOrigin[1] - tanTheta*x*L*xSize;
    return [x1, y1];
  }

  public getLorenzYAxisPoint(theta: number, y:number): number[] {
    let ySize = this.canvasH/this.yRange;
    let tanTheta = Math.tan(theta);
    let L = 1/Math.sqrt(1 - tanTheta*tanTheta);
    let x1 = ySize*tanTheta*y*L + this.canvasOrigin[0];
    let y1 = this.canvasOrigin[1] - ySize*y*L;
    return [x1, y1];
  }

  public getLorenzXY(theta: number, xy: number[]): number[] {
    let a = this.getLorenzXAxisPoint(theta,xy[0]);
    let b = this.canvasOrigin
    let c = this.getLorenzYAxisPoint(theta,xy[1]);

     // calculate points originating from a
     let d = this.findPoints(a, this.findSlope(b, c), this.findDistance(b, c));
     if (Math.abs(this.findDistance(d[0], c) - this.findDistance(a, b)) < 1e-2) {
      return [d[0][0], d[0][1]]
    }
    else{
        return [d[1][0], d[1][1]]
    } 
  }

  public findSlope(q: number[],p: number[]): number {
    if (p[1] == q[1]){
        return 0;
    }
    if (p[0] == q[0]){
        return FLOAT_MAX;
    }
    return (q[1] - p[1]) / (q[0] - p[0]);
  }

  public findPoints(source: number[],m: number, l: number): number[][] {
    let a = [];
    let b = [];
    let dx = (l / Math.sqrt(1 + (m * m)));
    let dy = m * dx;
    a[0] = source[0] + dx, a[1] = source[1] + dy;
    b[0] = source[0] - dx, b[1] = source[1] - dy;
    return [a,b]
  }

  
  public findDistance(p: number[], q: number[]): number{
      return Math.sqrt(Math.pow((q[0] - p[0]), 2) + Math.pow((q[1] - p[1]), 2));
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
      this.canvasW = this.canvasBoundingRect.width;
      this.canvasH = this.canvasBoundingRect.height;
    }
    this._cdr.detectChanges();
  }

}
