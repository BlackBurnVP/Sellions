import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse,HttpRequest } from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getTvs():Observable<any>{
    const url = 'http://localhost:8080';
    return this.http.get(url+'/tvs');
  }

  addTv(tv: Object): Observable<Object> {
    const url = 'http://localhost:8080';
    return this.http.post(url + '/tvs',tv);
  }

  getTv(id:number):Observable<Object>{
    const url = 'http://localhost:8080';
    return this.http.get(url+'/tvs/'+id)
  }

  updateTv(id: number, tv: Object): Observable<Object> {
    const url = 'http://localhost:8080';
    return this.http.put(url+'/tvs/'+id, tv);
  }

  deleteTv(id: number): Observable<any> {
    const url = 'http://localhost:8080/tvs/delete/'+id;
    console.log(url);
    return this.http.get(url);

  }

}
