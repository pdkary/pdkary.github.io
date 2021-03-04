import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BsmDataService {
  _baseUrl = "https://54.175.250.21:8080";
  constructor(private http: HttpClient) { }

  set_tickers(tkrs:Array<String>,rfr:Number): Observable<Object> {
    const data = {'tickers':tkrs,'risk-free-rate':rfr};
    const headers = { 'content-type': 'application/json'};  
    return this.http.post(this._baseUrl+"/api/tickers",data,{'headers':headers});
  }

  get_atm_single_expr(expr:String): Observable<Object> {
    const data = {"request-type":1,"expiration":expr};
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this._baseUrl+"/api/bsm-data",data,{'headers':headers})
  }

  get_atm_shift_abs_single_expr(expr:String,shift:Number): Observable<Object> {
    const data = {"request-type":2,"expiration":expr,"abs-shift":shift};
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this._baseUrl+"/api/bsm-data",data,{'headers':headers})
  }
  get_atm_shift_rel_single_expr(expr:String,shift:Number): Observable<Object> {
    const data = {"request-type":3,"expiration":expr,"rel-shift":shift};
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this._baseUrl+"/api/bsm-data",data,{'headers':headers})
  }

  get_any_single_expr(expr:String,strike_map:Object): Observable<Object> {
    const data = {"request-type":4,"expiration":expr,"strike-map":strike_map};
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this._baseUrl+"/api/bsm-data",data,{'headers':headers})
  }

  get_atm_multi_expr(expr_map?:Object,date_range?:Object): Observable<Object> {
    const data = {"request-type":5,"expiration-map":expr_map,"date-range":date_range};
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this._baseUrl+"/api/bsm-data",data,{'headers':headers})
  }

  get_atm_shift_abs_multi_expr(shift:Number,expr_map?:Object,date_range?:Object): Observable<Object> {
    const data = {"request-type":6,"expiration-map":expr_map,"date-range":date_range,"abs-shift":shift};
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this._baseUrl+"/api/bsm-data",data,{'headers':headers})
  }
  get_atm_shift_rel_multi_expr(shift:Number,expr_map?:Object,date_range?:Object): Observable<Object> {
    const data = {"request-type":7,"expiration-map":expr_map,"date-range":date_range,"rel-shift":shift};
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this._baseUrl+"/api/bsm-data",data,{'headers':headers})
  }

  get_any_multi_expr(strike_map:Object,expr_map?:Object,date_range?:Object): Observable<Object> {
    const data = {"request-type":8,"expiration-map":expr_map,"date-range":date_range,"strike-map":strike_map};
    const headers = { 'content-type': 'application/json'};
    return this.http.post(this._baseUrl+"/api/bsm-data",data,{'headers':headers})
  }

}
