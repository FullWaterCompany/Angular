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
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {

   Invoices: Invoice[] = [];

    subscriptionNo: string;
    testform: FormGroup;
    show: boolean = false;
    sansation: boolean = false;
    real:number
    formData: Invoice;
    constructor(
      public invoiceService: InvoiceService,
      public fb: FormBuilder,
     
    ) {}
  
    ngOnInit() {
  
      this.testform = this.fb.group({
        id: [''],
        year:[''],
        subscriberNo: [''],
        subscriptionNo: [''],
        realStateType: [''],
        date:[''],
        from:[''],
        to:[''],
        previousConsumption: [''],
        currentConsumption: [''],
        amountConsumption: [''],
        serviceFee: [''],
        taxRate: [''],
        consumptionValue: [''],
        wastewaterConsumption: [''],
        totalInvoice: [''],
        taxValue: [''],
        totalBill: [''],
        isThereSanitation: [''],   
        notes: [''],
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
  
      this.testform.patchValue({
        subscriberNo: data.subscriberNo,
        subscriptionNo: data.subscriptionNo,
        previousConsumption: data.previousConsumption,
        unitNo: data.unitNo,
        isThereSanitation: data.isThereSanitation,
        amountConsumption:data.amountConsumption,
        taxRate:data.taxRate,
        notes:data.notes,
        totalBill:data.totalBill,
        taxValue:data.taxValue,
        realStateType: data.realStateType,
        date:data.date,
        from:data.from,
        totalInvoice:data.totalInvoice,
        to:data.to,
        wastewaterConsumption:data.wastewaterConsumption,
        year:data.year,
        consumptionValue:data.consumptionValue,
      })
    }
  

   save(testform:FormGroup){
      this.invoiceService.addInvoice(testform.value).subscribe(data=>{
        console.log(data)
      })
   }
  
    onChange(e:any){
        console.log(e.value)
        this.real=e.value
    }
    check(e:any){
      console.log(e.value)
      this.sansation=e.value
  }
  }
  

