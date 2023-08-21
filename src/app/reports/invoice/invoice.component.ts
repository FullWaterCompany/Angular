import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { SupscriptionService } from 'src/app/Core/_Services/supscription.service';
import { RealStateService } from 'src/app/Core/_Services/RealState';
import { Subscription } from 'src/app/Core/_Models/Subscription';
import { RealState } from 'src/app/Core/_Models/RealState';
import { Invoice } from 'src/app/Core/_Models/Invoice';
import { InvoiceService } from 'src/app/Core/_Services/Invoice';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { formatDate } from '@angular/common';

import { Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  displayedColumns: string[] = [
    'id',
    'subscriptionNo',
    'subscriberNo',
    'realStateType',
    'date',
    'to',
    'from',
    'previousConsumption',
    'currentConsumption',
    'amountConsumption',
    'serviceFee',
    'taxRate',
    'consumptionValue',
    'wastewaterConsumption',
    'totalInvoice',
    'totalBill',
    'isThereSanitation',
    'notes',
  ];
  dataSource: MatTableDataSource<Invoice>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public subscriptionService: SupscriptionService,
    public realService: RealStateService,
    public invoiceService: InvoiceService,
    @Inject(LOCALE_ID) public locale: string
  ) {}
  subscriptions: Subscription[] = [];
  realStates: RealState[] = [];
  invoices: Invoice[] = [];
  data: Invoice[] = [];
  invoice:Invoice

  ngOnInit() {
    this.invoiceService.getAll().subscribe((data) => {
      this.invoices = data;
      console.log(this.invoices);

      this.realService.getAll().subscribe((data) => {
        this.realStates = data;
        console.log(this.realStates);

        this.dataSource = new MatTableDataSource(this.invoices);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
    const savedInvoiceData = localStorage.getItem('invoiceData');

    if (savedInvoiceData !== null) {
      const savedInvoice = JSON.parse(savedInvoiceData);
      console.log('Saved Invoice:', savedInvoice);
      this.invoiceService.getAll().subscribe(data=>{
        const matchingInvoice = data.find(
          e => e.date === savedInvoice.date && e.subscriberNo === savedInvoice.subscriberNo
        );
        
        if (matchingInvoice) {
          this.invoice = matchingInvoice;
          console.log(this.invoice)
        } else {
          console.log('No matching invoice found.');
        }
      })
    } else {
      console.log('No saved invoice data found.');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getRealStateTypeName(realStateId: number): string {
    const realState = this.realStates.find((real) => real.id === realStateId);
    return realState ? realState.name : '';
  }
  events: string[] = [];

  async addEvent(e: any) {
    const curr = formatDate(e.value, 'yyyy-MM-dd', this.locale);
    console.log(curr);

    console.log(this.invoices);
    this.data = this.invoices.filter((e) => {
      const formattedDate = formatDate(e.date, 'yyyy-MM-dd', this.locale);
      return formattedDate == curr;
    });
    console.log(this.data);

    this.dataSource = new MatTableDataSource(this.data);
  }}


