import { Injectable } from '@angular/core';
import { Supscriper } from '../_Models/supscriper';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupscriperService {
  baseURL: string = 'http://localhost:8080/api/subscriper';

  constructor(public http: HttpClient) {}
  getAll(): Observable<Supscriper[]> {
    return this.http.get<Supscriper[]>(this.baseURL).pipe(
      map((data) => {
        //You can perform some transformation here
        return data;
     }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }

  getById(id:string | null): Observable<Supscriper> {
    return this.http.get<Supscriper>(this.baseURL+'/' + id).pipe(
      map((data) => {
       
        return data;
     }),
    );
  }


  updateSubscriper(id:string | null,subscribe:Supscriper): Observable<Supscriper> {
    return this.http.put<Supscriper>(this.baseURL+'/'+id+'/',subscribe).pipe(
      map((data) => {
        //You can perform some transformation here
        return data;
     }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }
}
