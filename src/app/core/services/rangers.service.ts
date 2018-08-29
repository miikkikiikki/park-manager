import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ranger} from '../models/ranger.model';

@Injectable({
  providedIn: 'root'
})
export class RangersService {
  corsApiKey = '5b867ab019af4a22fafd4a8a';
  rangersUrl = `https://rangers-8e06.restdb.io/rest/rangers`;

  constructor(private http: HttpClient) { }

  getRangers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-apikey': this.corsApiKey,
        'cache-control': 'no-cache'
      })
    };
    return this.http.get(this.rangersUrl, httpOptions);
  }

  updateRangers(id: string, ranger: Ranger): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-apikey': this.corsApiKey,
        'cache-control': 'no-cache'
      })
    };
    return this.http.put(this.rangersUrl + `/${id}`, ranger, httpOptions);
  }
}
