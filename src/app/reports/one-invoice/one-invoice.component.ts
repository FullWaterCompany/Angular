import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RealStateService } from 'src/app/Core/_Services/RealState';

import { RealState } from 'src/app/Core/_Models/RealState';
import { Invoice } from 'src/app/Core/_Models/Invoice';
import { InvoiceService } from 'src/app/Core/_Services/Invoice';
import { FormControl, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';

import { Inject, LOCALE_ID } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-one-invoice',
  templateUrl: './one-invoice.component.html',
  styleUrls: ['./one-invoice.component.css'],
})
export class OneInvoiceComponent {
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  profileForm: FormGroup;
  show: boolean = false;

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
    public realService: RealStateService,
    public invoiceService: InvoiceService,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  realStates: RealState[] = [];
  invoices: Invoice;
  InvoiceNo: string = ' ';
  data: Invoice[] = [];
  ngOnInit() {
    this.profileForm = new FormGroup({
      InvoiceNO: new FormControl(''),
    });
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

  onSubmit() {
    this.InvoiceNo = this.profileForm.controls[
      'InvoiceNO'
    ].value.trim() as string;
    console.log(this.InvoiceNo);
    if (this.InvoiceNo.length > 0) {
      this.invoiceService.getById(this.InvoiceNo).subscribe({
        next: (data) => {
          console.log(data);
          this.show = true;
          this.invoices = data;
          this.realService.getAll().subscribe((data) => {
            this.realStates = data;
            console.log(this.realStates);

            this.dataSource = new MatTableDataSource([this.invoices]);
          });
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Not Valid Number!',
          });
        },
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Not Valid Number!',
      });
    }
  }
}
