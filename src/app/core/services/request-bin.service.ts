import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestBinService {
  requestBinUrl = 'http://requestbin.fullcontact.com/uq7ovduq';
  constructor(private http: HttpClient) { }

  addEventRequest(eventName: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Origin, Authorization',
        // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      })
    };
    return this.http.post(this.requestBinUrl, eventName, httpOptions);
  }
}
