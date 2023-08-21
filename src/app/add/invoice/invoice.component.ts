import { Component } from '@angular/core';
import { Invoice } from '../../Core/_Models/Invoice';
import { InvoiceService } from '../../Core/_Services/Invoice';
import { RealStateService } from '../../Core/_Services/RealState';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { RealState } from 'src/app/Core/_Models/RealState';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent {
  Invoices: Invoice[] = [];

  subscriptionNo: string;
  testform: FormGroup;
  show: boolean = false;
  sansation: boolean = false;
  real: number;
  formData: Invoice;
  today = new Date();
  invoice: Invoice;

  constructor(public invoiceService: InvoiceService, public fb: FormBuilder) {}

  ngOnInit() {
    this.testform = this.fb.group({
      id: 'string',
      year: 'string',
      realStateType: [''],
      subscriptionNo: [''],
      subscriberNo: [''],
      date: '2023-08-19T17:05:11.772Z',
      from: '2023-08-19T17:05:11.772Z',
      to: '2023-08-19T17:05:11.772Z',
      previousConsumption: [''],
      currentConsumption: [''],
      amountConsumption: 0,
      serviceFee: [''],
      taxRate: [''],
      isThereSanitation: [''],
      consumptionValue: 0,
      wastewaterConsumption: 0,
      totalInvoice: 0,
      taxValue: 0,
      totalBill: 0,
      notes: 'string',
    });
    this.invoiceService.getAll().subscribe((data) => {
      this.Invoices = data;
    });
  }

  profileForm = new FormGroup({
    Subscription_No: new FormControl(''),
  });

  submit() {
    this.subscriptionNo = this.profileForm.controls['Subscription_No']
      .value as string;
    if (this.subscriptionNo.length > 0) {
      this.invoiceService.getInvoiceData(this.subscriptionNo).subscribe({
        next: (data) => {
          console.log(data);
          this.show = !this.show;
          this.showForm(data);
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

  showForm(data: any) {
    this.formData = data;
    console.log(data);
    this.testform.patchValue({
      subscriberNo: data.subscriberNo,
      subscriptionNo: data.subscriptionNo,
      previousConsumption: data.previousConsumption,
      unitNo: 0,
      isThereSanitation: data.isThereSanitation,
      amountConsumption: 0,
      taxRate: data.taxRate,
      notes: ' ',
      totalBill: 0,
      taxValue: 0,
      realStateType: data.realStateType,
      date: this.today,
      from: this.today,
      totalInvoice: 0,
      to: this.today,
      wastewaterConsumption: 0,
      year: ' ',
      consumptionValue: 0,
      serviceFee: data.serviceFee,
    });
  }

  save(testform: FormGroup) {
    console.log(testform.value);
    this.invoiceService.addInvoice(testform.value).subscribe((data) => {
      console.log(data);
      this.invoice = data as Invoice;
      console.log(this.invoice);
      localStorage.setItem('invoiceData', JSON.stringify(this.invoice)); // Convert object to JSON string and save

    });
  }

  onChange(e: any) {
    console.log(e.value);
    this.real = e.value;
  }
  check(e: any) {
    console.log(e.value);
    this.sansation = e.value;
  }
}
