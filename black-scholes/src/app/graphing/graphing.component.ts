import { Component, ViewChild } from '@angular/core';
import { CursorModes, GraphComponent } from "../graph/graph.component"

@Component({
  selector: 'app-graphing',
  templateUrl: './graphing.component.html',
  styleUrls: ['./graphing.component.scss']
})
export class GraphingComponent {

  public functionPrecision: number = 2;
  
  public lorenzAngle = 0;
  
  public xStart: number = 0;
  public xEnd: number = 10;
  public yStart: number = 0;
  public yEnd: number = 10;
  
  public gridLines: boolean = false;
  public lorenzGridLines: boolean = true;
  public cursorLines: boolean = false;
  public lorenzCursorLines: boolean = false;
  public cursorMode: CursorModes = CursorModes.PARRALEL; 

  public pi = Math.PI;
  public cursorModes: CursorModes[] = [CursorModes.PARRALEL, CursorModes.PERPENDICULAR, CursorModes.LIGHT_CONE, CursorModes.NONE];

  @ViewChild(GraphComponent)
  public graphComponent: GraphComponent;
  
  public trackByIndex(index: number, value: string): number {
    return index;
  }
}
