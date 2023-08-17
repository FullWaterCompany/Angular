import { Injectable } from '@angular/core';
import { Invoice } from '../_Models/Invoice';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  baseURL: string = 'https://localhost:44375/api/Invoice';

  constructor(public http: HttpClient) {}
  getAll(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseURL).pipe(
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

  getById(id: string): Observable<Invoice> {
    return this.http.get<Invoice>(this.baseURL + '/' + id).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }

  updateSubscriper(id: string, invoice: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(this.baseURL + '/' + id + '/', invoice).pipe(
      map((data) => {
        return data;
      }),
      catchError((err) => {
        console.error(err);
        throw err;
      })
    );
  }
  getInvoiceData(subscriptionNO: string) {
    return this.http
      .get(this.baseURL + '/' + 'GetInvoiceData' + '/' + subscriptionNO)
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
  addInvoice(invoice: Invoice) {
    return this.http.post(this.baseURL, invoice).pipe(
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
