import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { BsmDataService } from '../bsm-data.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { Moment } from 'moment';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

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
export class BlackScholesComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  displayedColumns: string[]  = ["symbol", "expiration", "spot", "strike", "BSM_Value", "last", "bid", "ask", "breakeven", "openInterest", "delta", "gamma", "theta", "IV", "vol"];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  tickerCtrl = new FormControl();

  tickers: string[] = ['AAPL'];
  start_date: Moment | string;
  end_date: Moment | string;
  expr_map: Map<String, Array<String>>;
  
  bsmElements: BsmElement[] = [];

  @ViewChild('tickerInput')
  tickerInput!: ElementRef<HTMLInputElement>;

  @ViewChild('callPaginator') 
  callPaginator!: MatPaginator;

  @ViewChild('putPaginator') 
  putPaginator!: MatPaginator;

  callDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="CALL"));
  putDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="CALL"));


  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor(private bsmDataService: BsmDataService) {
    this.start_date = "";
    this.end_date = "";
    this.expr_map = new Map<String, Array<String>>();
    this.range.get("end")?.valueChanges.subscribe(x => this.end_date = x);
    this.range.get("start")?.valueChanges.subscribe(x => this.start_date = x);
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

  pull_data(): void {
    console.log(this.tickers);
    let start_date = (this.start_date as Moment).format("Y-MM-DD");
    let end_date = (this.end_date as Moment).format("Y-MM-DD");
    let date_range = [start_date, end_date]
    this.bsmDataService.set_tickers(this.tickers, .012).subscribe(x => {
      this.bsmDataService.get_atm_multi_expr(undefined, date_range).subscribe(x=> {
        let arr = (x as Array<any>);
        arr.forEach(x => this.bsmElements.push(this.convert_row_to_bsm_element(x)));
        this.callDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="CALL"));
        this.putDataSource = new MatTableDataSource<BsmElement>(this.bsmElements.filter((ele: BsmElement)=>ele.type=="CALL"));
        this.callDataSource.paginator=this.callPaginator;
        this.putDataSource.paginator=this.putPaginator;
      });
    });
  }

  convert_row_to_bsm_element(row: Array<any>): BsmElement {
    let bsm_ele = { "symbol": row[0], "expiration": row[1], "type": row[2], "spot": row[3], "strike": row[4], "BSM_Value": row[5], "BSM_percent_over_ask": row[6], "last": row[7], "bid": row[8], "ask": row[9], "breakeven": row[10], "percent_change_for_BE": row[11], "openInterest": row[12], "delta": row[13], "gamma": row[14], "theta": row[15], "vega": row[16], "rho": row[17], "IV": row[18], "vol": row[19] };
    return (bsm_ele as BsmElement);
  }

  ngOnInit(): void {
    this.callDataSource.paginator=this.callPaginator;
    this.putDataSource.paginator=this.putPaginator;
  }
}