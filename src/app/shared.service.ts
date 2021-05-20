import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }

  getReelList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Reels');
  }
}
