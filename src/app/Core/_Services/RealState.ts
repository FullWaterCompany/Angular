import { Injectable } from '@angular/core';
import { RealState } from '../_Models/RealState';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RealStateService {
  baseURL: string = 'https://localhost:44375/api/realState';

  constructor(public http: HttpClient) {}
  getAll(): Observable<RealState[]> {
    return this.http.get<RealState[]>(this.baseURL).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }

  getById(id: number): Observable<RealState> {
    return this.http.get<RealState>(this.baseURL + '/' + id).pipe(
      map((data) => {
        return data;
      })
    );
  }

  updateSubscriper(
    id: number ,
    RealState: RealState
  ): Observable<RealState> {
    return this.http
      .put<RealState>(this.baseURL + '/' + id + '/', RealState)
      .pipe(
        map((data) => {
          return data;
        }),
        catchError((err) => {
          console.error(err);
          throw err;
        })
      );
  }
}
