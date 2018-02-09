import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/retryWhen';

@Injectable()
export class AdClientService {

  private _uniqueId: string;
  private _timeout: number = 5000; // ms

  setUniqueID(id: string): void {
    this._uniqueId = id;
  }

  constructor(private _http: Http) { }

  register(id: string): void {
    // if succ then set unique id
  }

  ping(): boolean {
    // Should be a validator 
    if (this._uniqueId === undefined || this._uniqueId === null || this._uniqueId === '') {
      return false;
    }

    return false;
  }

  uploadData(object: any) {
    let headers = this.createRequestHeader();
    let options = new RequestOptions({ headers: headers });
    let entity: string = '';

    return this._http.post("192.168.10.136:8080/api/att/upload/" + this._uniqueId, { object }, options)
      .map(res => res.json());
  }

  private createRequestHeader() {
    let headers = new Headers();

    headers.append("Content-Type", "application/x-www-form-urlencoded");

    return headers;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

}
