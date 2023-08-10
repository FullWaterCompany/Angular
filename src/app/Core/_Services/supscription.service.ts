import { Injectable } from '@angular/core';
import { Subscription } from '../_Models/Subscription';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupscriptionService {
  baseURL: string = 'https://localhost:44375/api/Subscription';

  constructor(public http: HttpClient) {}
  getAll(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.baseURL).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }

  getById(id: string ): Observable<Subscription> {
    return this.http.get<Subscription>(this.baseURL + '/' + id).pipe(
      map((data) => {
        return data;
      })
    );
  }

  updateSubscriper(
    id: string ,
    subscription: Subscription
  ): Observable<Subscription> {
    return this.http
      .put<Subscription>(this.baseURL + '/' + id + '/', subscription)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err) => {
          console.error(err);
          console.log(err)
          throw err;
        })
      );
  }
}
