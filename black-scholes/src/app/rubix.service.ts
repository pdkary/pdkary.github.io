import { Injectable } from '@angular/core';

enum Color {
  RED = 1,
  GREEN = 2,
  ORANGE = 3,
  YELLOW = 4,
  BLUE = 5,
  WHITE = 6,
}
function zip(a: number[], b: number[]): number[][]{
  var out: number[][] = [];
  a.forEach(k => b.forEach(l => out.push([k, l])));
  return out;
}

function zip_rev(a: number[], b: number[]): number[][]{
  var out: number[][] = [];
  b.forEach(k => a.forEach(l => out.push([l, k])));
  return out;
}

function zip2d(a: number[][], b: number[][]): number[][][]{
  return a.map((k, i) => [k, b[i]]);
}

function zip_to_const(a: number[], c: number): number[][]{
  return a.map((k) => [k, c]);
}
function zip_to_const_rev(c: number, a: number[]): number[][]{
  return a.map((k) => [c, k]);
}

function deepcopy(x: any): any {
  return JSON.parse(JSON.stringify(x));
}

function get_intersection(c1: number[], c2: number[], r1: number, r2: number): number[] {
    var dx = c1[0] - c2[0];
    var dy = c1[1] - c2[1];
    var R = Math.sqrt(dx*dx+dy*dy);
    var R2=R*R
    var R4=R2*R2
    
    var dr2 = r1*r1 - r2*r2

    var a = (r1*r1 - r2*r2)/(2*R2)
    var b = Math.sqrt(2 * (r1*r1 + r2*r2) / R2 - (dr2 * dr2) / R4 - 1)

    var fx = (c1[0]+c2[0]) / 2 + a * (c2[0] - c1[0])
    var gx = b*(c2[1]-c1[1])/2
    var i1x = fx + gx
    var fy = (c1[1] + c2[1]) / 2 + a * (c2[1] - c1[1])
    var gy = b*(c1[0] - c2[0])/2
    var i1y = fy + gy
    return [i1x, i1y]
}

@Injectable({
  providedIn: 'root'
})
export class RubixService {
  public canvasH: number = 500;
  public canvasW: number = 500;
  public scale: number = 100;
  public center: number[] = [250,250];
  public table: number[][];
  public intersections: number[][][];
  public centers: number[][];
  public ring_radii: number[];
  public previous_positions: Map<string, string>;
  public most_recent_turn: number[];

  constructor() {
    this.initialize();
  }
  
  public set_size(height: number, width: number) {
    this.canvasH = height;
    this.canvasW = width; 
    this.scale = Math.min(this.canvasH,this.canvasW)/4.25;
    this.center = [width/2, height/2];
    this.initialize();
  }

  public initialize() {
    var a = this.scale;
    var r = a*Math.sqrt(3)/6;
    this.centers = [
      [this.center[0] - a/2, this.center[1] - r], 
      [this.center[0] + a/2, this.center[1] - r],
      [this.center[0], this.center[1] + 2*r]];
    this.ring_radii = [this.scale*7/6, this.scale*4/3, this.scale*3/2]
    this.table = Array(9).fill(0).map(() => Array(9).fill(0));
    this.fill_table_range(0,3,3,6,Color.RED);
    this.fill_table_range(0,3,6,9,Color.GREEN);
    this.fill_table_range(3,6,0,3,Color.ORANGE);
    this.fill_table_range(3,6,6,9,Color.YELLOW);
    this.fill_table_range(6,9,0,3,Color.BLUE);
    this.fill_table_range(6,9,3,6,Color.WHITE);
    this.initialize_intersections();
  }

  public get_rotations(disc_id: number, ring_id: number): number[][][][] {
    var a = disc_id*3 + ring_id 
    var sets = [[0,1,2],[3,4,5],[6,7,8]];
    var reverse_sets = [[2,1,0],[5,4,3],[8,7,6]];
    sets.splice(disc_id,1)
    reverse_sets.splice(disc_id,1)
    
    var face_before0 = zip(sets[1], sets[0]);
    var face_before1 = zip(sets[0], sets[1]);
    var face_rot0 = zip_rev(sets[0], reverse_sets[1]);
    var face_rot1 = zip_rev(reverse_sets[0], sets[1]);
    var face_rot2 = zip_rev(reverse_sets[1], sets[0]);
    var face_rot3 = zip_rev(sets[1], reverse_sets[0]);
    
    var f00 = zip2d(face_before0, face_rot0);
    var f01 = zip2d(face_before0, face_rot1);
    var f02 = zip2d(face_before0, face_rot2);
    var f03 = zip2d(face_before0, face_rot3);
    var f10 = zip2d(face_before1, face_rot0);
    var f11 = zip2d(face_before1, face_rot1);
    var f12 = zip2d(face_before1, face_rot2);
    var f13 = zip2d(face_before1, face_rot3);

    var ring_s0a_ars1 = zip2d(zip_to_const(sets[0],a), zip_to_const_rev(a, reverse_sets[1]));
    var ring_s0a_s1a  = zip2d(zip_to_const(sets[0],a), zip_to_const(sets[1], a));
    var ring_s1a_s0a  = zip2d(zip_to_const(sets[1],a), zip_to_const(sets[0], a));
    var ring_s1a_ars0 = zip2d(zip_to_const(sets[1],a), zip_to_const_rev(a, reverse_sets[0]));
    var ring_as0_rs1a = zip2d(zip_to_const_rev(a, sets[0]), zip_to_const(reverse_sets[1], a));
    var ring_as0_as1  = zip2d(zip_to_const_rev(a, sets[0]), zip_to_const_rev(a, sets[1]));
    var ring_as1_as0  = zip2d(zip_to_const_rev(a, sets[1]), zip_to_const_rev(a, sets[0]));
    var ring_as1_rs0a = zip2d(zip_to_const_rev(a, sets[1]), zip_to_const(reverse_sets[0], a));

    //       0   1   2   3   4   5   6   7         8              9            10            11             12              13           14             15  
    return [f00,f01,f02,f03,f10,f11,f12,f13, ring_s0a_ars1, ring_s0a_s1a, ring_s1a_s0a, ring_s1a_ars0, ring_as0_rs1a, ring_as0_as1, ring_as1_as0, ring_as1_rs0a];
  }

  public turn(disc_id: number, ring_id: number, cw: boolean){
    var rotation_set = this.get_rotations(disc_id,ring_id);
    var ring_changes:  number[][][][];
    var face_changes:  number[][][];

    switch(disc_id){
      case 0: {
        ring_changes = [
          cw ? rotation_set[8] : rotation_set[9],
          cw ? rotation_set[10] : rotation_set[11],
          cw ? rotation_set[12] : rotation_set[13],
          cw ? rotation_set[14] : rotation_set[15],
        ];
        switch(ring_id) {
          case 0: {
            face_changes = cw ? rotation_set[2] : rotation_set[3];
            break;
          }
          case 2: {
            face_changes = cw ? rotation_set[4] : rotation_set[5];
            break;
          }
          default: {
            face_changes = [];
            break;
          }
        }
        break;
      }
      case 1: {
        ring_changes = [
          cw ? rotation_set[13] : rotation_set[12],
          cw ? rotation_set[15] : rotation_set[14],
          cw ? rotation_set[9] : rotation_set[8],
          cw? rotation_set[11] : rotation_set[10],
        ];
        switch(ring_id) {
          case 0: {
            face_changes = cw ? rotation_set[5] : rotation_set[4];
            break;
          }
          case 2: {
            face_changes = cw ? rotation_set[3] : rotation_set[2];
            break;
          }
          default: {
            face_changes = [];
            break;
          }
        }
        break;
      }
      case 2: {
        ring_changes = [
          cw ? rotation_set[8] : rotation_set[9],
          cw ? rotation_set[10] : rotation_set[11],
          cw ? rotation_set[12] : rotation_set[13],
          cw? rotation_set[14] : rotation_set[15],
        ]
        switch(ring_id) {
          case 0: {
            face_changes = cw ? rotation_set[2] : rotation_set[3];
            break;
          }
          case 2: {
            face_changes = cw ? rotation_set[4] : rotation_set[5];
            break;
          }
          default: {
            face_changes = [];
            break;
          }
        }
        break;
      }
      default: {
        ring_changes = [];
        face_changes = [];
      }
    }
      
    var tmp: number[][] = Array(9).fill(0).map(() => Array(9).fill(0));
    this.previous_positions = new Map<string, string>();
    this.most_recent_turn = [disc_id, ring_id];


    ring_changes.forEach((change_set: number[][][]) => {
      change_set.forEach((changes: number[][]) => {
        var ogpos = changes[0];
        tmp[ogpos[0]][ogpos[1]] = deepcopy(this.table[ogpos[0]][ogpos[1]]);
      });
    });

    face_changes.forEach((changes: number[][]) => {
      var ogpos = changes[0];
      tmp[ogpos[0]][ogpos[1]] = deepcopy(this.table[ogpos[0]][ogpos[1]]);
    });

    ring_changes.forEach((change_set: number[][][]) => {
      change_set.forEach((changes: number[][]) => {
        var ogpos = changes[0];
        var newpos = changes[1];
        this.previous_positions.set(newpos.toString(), ogpos.toString());
        this.table[newpos[0]][newpos[1]] = deepcopy(tmp[ogpos[0]][ogpos[1]]);
      });
    });
    
    face_changes.forEach((changes: number[][]) => {
      var ogpos = changes[0];
      var newpos = changes[1];
      this.previous_positions.set(newpos.toString(), ogpos.toString());
      this.table[newpos[0]][newpos[1]] = deepcopy(tmp[ogpos[0]][ogpos[1]]);
    });
  }

  public initialize_intersections(): void {
    this.intersections = Array(9).fill(0).map(() => Array(9).fill([0,0]));
    for(var i=0;i<9;i++){
      for(var j=0;j<9;j++){
        var d0 = Math.floor(i/3);
        var d1 = Math.floor(j/3);
        var r0 = i%3;
        var r1 = j%3;
        if (d0 != d1){
          var c0 = this.centers[d0];
          var c1 = this.centers[d1];
          var R0 = this.ring_radii[r0];
          var R1 = this.ring_radii[r1];
          var dot_loc = get_intersection(c0,c1,R0,R1)
          this.intersections[i][j] = dot_loc;
        }
      }
    }
  }

  public fill_table_range(i0: number, i1: number, j0: number, j1: number, val: number) {
    for(var i=i0;i<i1;i++){
      for(var j=j0;j<j1;j++){
        this.table[i][j] = val;
      }
    }
  }

  public has_previous_position(i: number, j:number): boolean{
    if (!!this.previous_positions){
      var pos = [i,j].toString();
      return this.previous_positions.has(pos);
    }
    return false;
  }

  public get_previous_position(i: number, j: number): number[] | undefined {
    if (this.has_previous_position(i,j)){
      var pos = [i,j].toString();
      var val = this.previous_positions.get(pos);
      if (!!val){
        return [+val[0],+val[2]];
      }
      return undefined
    }
    return undefined
  }
}
