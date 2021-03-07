import { Component, ElementRef, ViewChild, OnInit, OnChanges, AfterViewInit, HostListener } from '@angular/core';
import { BsmDataService } from '../bsm-data.service';
import { COMMA, ENTER,SPACE } from '@angular/cdk/keycodes';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent, MatChipList } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { Moment } from 'moment';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface BsmElement {
  symbol: string;
  expiration: string;
  type: string;
  spot: Number;
  strike: Number;
  BSM_Value: Number;
  BSM_percent_over_ask: Number;
  last: Number;
  bid: Number;
  ask: Number;
  breakeven: Number;
  percent_change_for_BE: Number;
  openInterest: Number;
  delta: Number;
  gamma: Number;
  theta: Number;
  vega: Number;
  rho: Number;
  IV: Number;
  vol: Number;
}

@Component({
  selector: 'app-black-scholes',
  templateUrl: './black-scholes.component.html',
  styleUrls: ['./black-scholes.component.scss']
})
export class BlackScholesComponent implements AfterViewInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
  displayedColumns: string[]  = ["symbol", "expiration", "spot", "strike", "BSM_Value", "last", "bid", "ask", "breakeven", "openInterest", "delta", "gamma", "theta", "IV", "vol"];
  mobileColumns: string[] = ["symbol", "spot", "strike", "BSM_Value", "last"];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  tickerCtrl = new FormControl();
  isMobile: boolean = false;
  show_column_editor:boolean = false;
  show_description_panel:boolean = false;

  tickers: string[] = ['AAPL'];
  start_date: Moment | string;
  end_date: Moment | string;
  expr_map: Map<String, Array<String>>;
  mode: Number = 0;
  shiftInput: number = 0;
  
  bsmElements: BsmElement[] = [];

  @ViewChild('tickerInput')
  tickerInput!: ElementRef<HTMLInputElement>;

  @ViewChild('callPaginator') 
  callPaginator: MatPaginator;

  @ViewChild('putPaginator') 
  putPaginator: MatPaginator;

  callDataSource:MatTableDataSource<BsmElement>; 
  putDataSource:MatTableDataSource<BsmElement>;

  call_table_rows: number = 5;
  put_table_rows: number= 5;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    let w = window.outerWidth;
    let h = window.outerHeight;
    if(h > w){
      this.isMobile = true;
      this.columnsToDisplay = this.mobileColumns;
    }else{
      this.isMobile = false;
      this.columnsToDisplay = this.displayedColumns;
    }
    console.log(this.isMobile);
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private bsmDataService: BsmDataService, private snackBar: MatSnackBar) {
    this.start_date = "";
    this.end_date = "";
    this.expr_map = new Map<String, Array<String>>();
    this.bsmElements = [];
    this.callDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="CALL"));
    this.putDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="PUT"));
    this.callDataSource.paginator = this.callPaginator;
    this.putDataSource.paginator = this.putPaginator;
    this.range.get("end")?.valueChanges.subscribe(x => this.end_date = x);
    this.range.get("start")?.valueChanges.subscribe(x => this.start_date = x);
    if(window.outerHeight > window.outerWidth){
      this.isMobile=true;
      this.columnsToDisplay = this.mobileColumns;
    }
  }
  ngAfterViewInit(): void {
    this.callDataSource.paginator = this.callPaginator;
    this.putDataSource.paginator = this.putPaginator;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || '').trim()) {
      const val = value.trim().toUpperCase();
      if (!this.tickers.includes(val)) {
        this.tickers.push(value.trim().toUpperCase());
        this.expr_map.set(value, []);
      }
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tkr: string): void {
    const index = this.tickers.indexOf(tkr);
    if (index >= 0) {
      this.tickers.splice(index, 1);
    }
  }
  openSnackBar(len:Number){
    if(len>0){
      let responseStr: string = "Query returned " + len.toString() + " options";
      this.snackBar.open(responseStr,"",{
        duration:3000,
        panelClass:"happy_snackbar",
        horizontalPosition:"right",
        verticalPosition:"top"
      });
    }else{
      this.snackBar.open("No Options Found!","",{
        duration:3000,
        panelClass:"sad_snackbar",
        horizontalPosition:"right",
        verticalPosition:"top"
      });
    }
  }

  pull_data(): void {
    console.log(this.tickers);
    let start_date = (this.start_date as Moment).format("Y-MM-DD");
    let end_date = (this.end_date as Moment).format("Y-MM-DD");
    let date_range = [start_date, end_date]
    this.bsmElements = [];
    this.bsmDataService.set_tickers(this.tickers, .012).subscribe(x => {
      if(this.mode==0){
        this.bsmDataService.get_atm_multi_expr(undefined, date_range).subscribe(x=> {
          let arr = (x as Array<any>);
          this.openSnackBar(arr.length);
          arr.forEach(x => this.bsmElements.push(this.convert_row_to_bsm_element(x)));
          this.callDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="CALL"));
          this.putDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="PUT"));
          this.callDataSource.paginator=this.callPaginator;
          this.putDataSource.paginator=this.putPaginator;
          this.call_table_rows = this.callPaginator.pageSize+10;
          this.put_table_rows = this.putPaginator.pageSize+10;
        });
      }else if(this.mode==1){
        console.log(this.shiftInput);
        this.bsmDataService.get_atm_shift_abs_multi_expr(+this.shiftInput,undefined, date_range).subscribe(x=> {
          let arr = (x as Array<any>);
          this.openSnackBar(arr.length);
          arr.forEach(x => this.bsmElements.push(this.convert_row_to_bsm_element(x)));
          this.callDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="CALL"));
          this.putDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="PUT"));
          this.callDataSource.paginator=this.callPaginator;
          this.putDataSource.paginator=this.putPaginator;
          this.call_table_rows = this.callPaginator.pageSize+10;
          this.put_table_rows = this.putPaginator.pageSize+10;
        });
      }else if(this.mode==2){
        console.log(this.shiftInput);
        this.bsmDataService.get_atm_shift_rel_multi_expr(+this.shiftInput,undefined, date_range).subscribe(x=> {
          let arr = (x as Array<any>);
          this.openSnackBar(arr.length);
          arr.forEach(x => this.bsmElements.push(this.convert_row_to_bsm_element(x)));
          this.callDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="CALL"));
          this.putDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="PUT"));
          this.callDataSource.paginator=this.callPaginator;
          this.putDataSource.paginator=this.putPaginator;
          this.call_table_rows = this.callPaginator.pageSize+10;
          this.put_table_rows = this.putPaginator.pageSize+10;
        });
      }
    });
  }

  convert_row_to_bsm_element(row: Array<any>): BsmElement {
    let bsm_ele = { "symbol": row[0], "expiration": row[1], "type": row[2], "spot": row[3], "strike": row[4], "BSM_Value": row[5], "BSM_percent_over_ask": row[6], "last": row[7], "bid": row[8], "ask": row[9], "breakeven": row[10], "percent_change_for_BE": row[11], "openInterest": row[12], "delta": row[13], "gamma": row[14], "theta": row[15], "vega": row[16], "rho": row[17], "IV": row[18], "vol": row[19] };
    return (bsm_ele as BsmElement);
  }

  handle_page_event(e:PageEvent,is_call:boolean){
    if(is_call){
      this.call_table_rows=this.callPaginator.pageSize+10;
    }else {
      this.put_table_rows=this.putPaginator.pageSize+10;
    }
  }
  toggle_column_editor(){
    this.show_column_editor= !this.show_column_editor;
  }

  toggle_column(i:number,e:MatCheckboxChange){
    console.log(i,e);
    console.log(this.displayedColumns[i]);
    if(e.checked){
      if(!this.columnsToDisplay.includes(this.displayedColumns[i])){
        this.columnsToDisplay.splice(i,0,this.displayedColumns[i]);
      }
    }else{
      if(this.columnsToDisplay.includes(this.displayedColumns[i])){
        let idx = this.columnsToDisplay.indexOf(this.displayedColumns[i]);
        this.columnsToDisplay.splice(idx,1);
      }
    }
  }
  toggle_description_panel(){
    console.log(this.show_description_panel);
    this.show_description_panel = !this.show_description_panel;
  }
}