import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { RubixService } from '../rubix.service';

interface DiscRingId {
  discId: number,
  ringId: number,
  center: number[],
  radius: number
}

@Component({
  selector: 'app-rubix',
  templateUrl: './rubix.component.html',
  styleUrls: ['./rubix.component.scss']
})
export class RubixComponent implements OnInit, AfterViewInit {
  public alpha: number = 1;
  public canvasH: number;
  public canvasW: number;
  public animation_funcs: Function[] = [];
  public animation_colors: string[] = [];
  public animation_points: number[][] = [];
  public animation_steps: number = 30;
  public active_rings: number[][] = [];

  public ringSize = 3;
  public dotSize = 7;
  public highlightColor = "#0db4b9";
  public canvasBoundingRect: DOMRect;

  private ctx: CanvasRenderingContext2D;
  public color_map = new Map([[0,"#000000"],[1,"#FC6255"],[2,"#FF862F"],[3,"#FFFF00"],[4,"#83C167"],[5,"#58C4DD"],[6,"#DDDDDD"]]);

  @ViewChild('canvas', {static: false})
  private canvas: ElementRef<HTMLCanvasElement>;

  @Output()
  public mouseOverRingEvent = new EventEmitter<DiscRingId>();
  
  @Output()
  public mouseLeaveRingEvent = new EventEmitter<DiscRingId>();

  public constructor(private rubixService: RubixService, private _cdr: ChangeDetectorRef) {
    var H = this.alpha*window.innerHeight;
    var W = this.alpha*window.innerWidth;
    if (H > W){
      this.canvasH = (H)*6/10;
      this.canvasW =  (W)*9/10;
    } else {
      this.canvasH = (H)*7/10;
      this.canvasW =  (W)*8/10;
    }
    rubixService.set_size(this.canvasH, this.canvasW);
  }

  ngOnInit(): void {
    this.mouseOverRingEvent.subscribe({
      next: (event: DiscRingId) => {
        this.active_rings = this.active_rings.filter((val) => !(val[0] == event.discId && val[1] == event.ringId));
        this.active_rings.push([event.discId, event.ringId]);
        this.drawCircle(event.center,event.radius,"",this.highlightColor,this.ringSize);
        this.drawDots();
      },
      error: (event: DiscRingId) => {
        console.log(event);
      }
    })
    
    this.mouseLeaveRingEvent.subscribe({
      next: (event: DiscRingId) => {
        this.active_rings = this.active_rings.filter((val) => !(val[0] == event.discId && val[1] == event.ringId));
        this.drawCircle(event.center,event.radius,"","white",this.ringSize+1);
        this.drawCircle(event.center,event.radius,"","black",this.ringSize);
        this.drawDots();
      },
      error: (event: DiscRingId) => {
        console.log(event);
      }
    })
  }

  ngAfterViewInit(): void {
    var ctx = this.canvas.nativeElement.getContext('2d');
    if (!!ctx){
      this.ctx = ctx;
      this.drawTable();
    }
  }

  @HostListener('mousemove', ['$event']) 
  public onMouseMove(event: { clientX: any; clientY: any; }) {
    for(let i in this.rubixService.centers){
      let c = this.rubixService.centers[i];
      for(let j in this.rubixService.ring_radii){
        let r = this.rubixService.ring_radii[j];
        let r_diff = Math.abs(this.getDistanceFromCenter(event,c) - r)
        if (r_diff < 5){
          this.mouseOverRingEvent.emit({discId: +i, ringId: +j, center: c, radius: r});
        } else {
          for(let ring of this.active_rings){
            if (+i == ring[0] && +j == ring[1]){
              this.mouseLeaveRingEvent.emit({discId: +i, ringId: +j, center: c, radius: r});
            }
          }
        }
      }
    }
  }

  public onCanvasClick(cw: boolean): boolean {
    if (this.active_rings.length > 0){
      for(let ring of this.active_rings){
        this.turn(ring[0], ring[1], cw);
      }
      return !cw;//to stop context menu from appearing on right click
    }
    return true;
  }

  private getDistanceFromCenter(event: {clientX: any; clientY: any;}, center: number[]): number {
    let rect = this.canvas.nativeElement.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let distx = Math.abs(center[0] - x);
    let disty = Math.abs(center[1] - y);
    return Math.sqrt(distx*distx + disty*disty);
  }

  public turn(disc_id: number, ring_id: number, cw: boolean){
    this.ctx.clearRect(0,0,this.canvasH, this.canvasW);
    this.rubixService.turn(disc_id,ring_id, !cw);
    this.animation_points = [];
    this.animation_funcs = [];
    this.animation_colors = [];

    var prev_mov = this.rubixService.most_recent_turn;
    for(var i=0;i<9;i++){
      for(var j=0;j<9;j++){
        var table_val = this.rubixService.table[i][j];
        if (table_val > 0){
          var color = this.color_map.get(table_val);
          var pos = this.rubixService.intersections[i][j];
          if (this.rubixService.has_previous_position(i,j)) {
            var prev_ij = this.rubixService.get_previous_position(i,j);
            if (prev_ij !== undefined){
              var pi = prev_ij[0];
              var pj = prev_ij[1];
              var prev_pos = this.rubixService.intersections[pi][pj];
              var pd0 = Math.floor(pi/3);
              var pd1 = Math.floor(pj/3);
              var C = this.rubixService.centers[prev_mov[0]];
              if (prev_mov[0] != pd0 && prev_mov[0] != pd1){
                //FACE MOVE
                this.animation_points.push([i,j]);
                this.animation_funcs.push(this.get_linear_path_function(prev_pos, pos));
                this.animation_colors.push(color ? color : "");
              }
              else{
                //RING MOVE
                this.animation_points.push([i,j]);
                this.animation_funcs.push(this.get_curve_path_function(C, prev_pos, pos, cw));
                this.animation_colors.push(color ? color : "");
              }
            }
          }
        }
      }
    }
    this.drawTable();
  }

  public drawTable(): void {
    var t: number = 0;
    const N = this.animation_steps;

    var run_step = () => {
      if(t <= N){
        this.ctx.clearRect(0,0,this.canvasW, this.canvasH); 
        this.drawCircles();
        for(var i=0;i<9;i++){
          for(var j=0;j<9;j++){
            var table_val = this.rubixService.table[i][j];
            if (table_val != 0){
              var color = this.color_map.get(table_val);
              color = !!color ? color : "";
              if (this.animation_points.some(ap => ap[0] == i && ap[1] == j)){
                for(var aid=0 ;aid<this.animation_funcs.length; aid++){
                  var func = this.animation_funcs[aid];
                  var clor = this.animation_colors[aid];
                  var p = func(t/N);
                  this.drawDot(p, 7, !!clor? clor : "");
                }
              } else {
                var pos = this.rubixService.intersections[i][j];
                this.drawDot(pos,7, color);
              }
            }
          }
        }
        t+=1;
        window.requestAnimationFrame(run_step);
      }
    }
    window.requestAnimationFrame(run_step);
  }

  public drawCircles(): void {
    this.drawDot(this.rubixService.center, this.dotSize+1, "PINK");
    for(var c of this.rubixService.centers){
      for(var i=0;i<3;i++){
        this.drawCircle(c,this.rubixService.ring_radii[i],"","black",this.ringSize)
      }
    }
  }

  private drawDots(): void {
    let tableAndIntersections = this.zip(this.rubixService.table, this.rubixService.intersections);
    for(let tableAndIntersectionSet of tableAndIntersections){
      let tableSet = tableAndIntersectionSet[0];
      let intersection_set = tableAndIntersectionSet[1];
      let valAndIntersectionSet = this.zip(tableSet, intersection_set);
      for(let valAndIntersection of valAndIntersectionSet){
        let val = valAndIntersection[0];
        let intersection = valAndIntersection[1];
        if (val != 0) {
          this.drawDot(intersection, this.dotSize, this.color_map.get(val) ?? "");
        }
      }
    }
  }

  public drawCircle(center: number[], radius: number, fill: string, stroke: string, strokeWidth: number): void {
    this.ctx.beginPath()
    this.ctx.arc(center[0], center[1], radius, 0, 2 * Math.PI, false)
    if (fill) {
      this.ctx.fillStyle = fill
      this.ctx.fill()
    }
    if (stroke) {
      this.ctx.lineWidth = strokeWidth
      this.ctx.strokeStyle = stroke
      this.ctx.stroke()
    }
  }

  private drawDot(center: number[], size:number, fill: string): void {
    this.ctx.beginPath();
    this.ctx.arc(center[0], center[1], size, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = fill;
    this.ctx.fill();
  }

  private get_curve_path_function(center: number[], point0: number[], point1: number[], cw: boolean): (t: number) => number[] {
    var dx0 = (point0[0] - center[0]);
    var dy0 = (point0[1] - center[1]);
    var dx1 = (point1[0] - center[0]);
    var dy1 = (point1[1] - center[1]);

    var M = cw ? 1 : -1;
    var R = Math.sqrt(dx0*dx0 + dy0*dy0);
    var theta0 = Math.atan2(dy0,dx0);
    var thetaf = Math.atan2(dy1,dx1);
    var theta_range = thetaf - theta0;
    if (Math.sign(theta_range)*M < 0){
      var theta = (t: number) =>  M*(t)*(2*Math.PI - M*(theta0 - thetaf)) + theta0;
    }else{
      var theta = (t: number) => t*(thetaf - theta0) + theta0;
    }
    return (t:number) => [center[0] + R*Math.cos(theta(t)), center[1] + R*Math.sin(theta(t))];
  }

  private get_linear_path_function(point0: number[], point1: number[]): (t: number) => number[] {
    var dx = point1[0] - point0[0];
    var dy = point1[1] - point0[1];
    return (t:number) => [t*dx + point0[0], t*dy + point0[1]];
  }
  
  private zip(a: any[], b: any[]): any[][] {
    if(a.length == b.length){
      return a.map((e,i) => {
        return [e,b[i]];
      })
    }
    throw new RangeError();
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
