import { Inject, Injectable, InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Window', {
  providedIn: 'root',
  factory: () => window
})

@Injectable({
  providedIn: 'root'
})
export class MinkowskiService {
  public canvasH: number;
  public canvasW: number;
  public graphPadding: number;

  public setGraphHeight(height: number): void {
    this.canvasH = height;
  }
  public setGraphWidth(width: number): void {
    this.canvasW = width;
  }

  public setGraphPadding(graphPadding: number): void {
    this.graphPadding = graphPadding;
  }

  public get graphOrigin(): number[] {
    if (!!this.graphPadding) {
      return [this.graphPadding, this.canvasH - this.graphPadding];
    } else {
      return [0, this.canvasH - this.graphPadding];
    }
  }

  public isInGraph(point: number[]): boolean {
    return (point[0] > 0 && point[0] < this.canvasW) && (point[1] > 0 && point[1] < this.canvasH)
  }
  
  public get_angle_from_origin(x: number, y: number) {
    let xdiff = x - this.graphOrigin[0];
    let ydiff = y - this.graphOrigin[1];
    return Math.atan2(-1*ydiff, xdiff)
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

  public getHyperbolicIntersections(theta: number, n: number): number[][] {
    //ok so each point on our base frame will map to the reference frame
    // by the reference frame's axis' intersection with a hyperbola defined by
    // x^2 = y^2 + n^2 intersecting with y = x*tan(theta)
    // x^2 = (x^2)(tan^2(theta)) + n^2
    // (x^2)(1- tan^2(theta)) = n^2
    // x = n / sqrt(1 - tan^2(theta))
    // y = n*tan(theta) / sqrt(1 - tan^2(theta))
    // for n = (0,1,2,3,.....)
    let tanTheta = Math.tan(theta);
    let L = 1/Math.sqrt(1 - tanTheta*tanTheta);
    let points: number[][] = [];
    let deltaY = this.canvasH/(n);
    let deltaX = this.canvasW/(n);
    for(let i=0;i<=n;i++){
      let x = deltaX*i*L + this.graphPadding;
      let y = this.canvasH - deltaY*tanTheta*i*L - this.graphPadding;
      points.push([x,y]);
    }
    return points
  }

}
