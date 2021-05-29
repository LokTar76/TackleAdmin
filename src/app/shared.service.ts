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

  addReel(val: any) {
    return this.http.post(this.APIUrl+'/Reels', val)
  }

  updateReel(val: any, id: any) {
    return this.http.put(this.APIUrl+'/Reels/'+id, val)
  }

  deleteReel(val: any) {
    return this.http.delete(this.APIUrl+'/Reels/'+val)
  }

  getRodList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Rods');
  }

  addRod(val: any) {
    return this.http.post(this.APIUrl + '/Rods', val);
  }

  updateRod(val: any, id: any) {
    return this.http.put(this.APIUrl + '/Rods/' + id, val);
  }

  deleteRod(val: any) {
    return this.http.delete(this.APIUrl + '/Rods/' + val);
  }
}
