import { Component } from '@angular/core';
import { Subscription } from '../../Core/_Models/Subscription';
import { SupscriptionService } from '../../Core/_Services/supscription.service';
import { RealStateService } from '../../Core/_Services/RealState';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { RealState } from 'src/app/Core/_Models/RealState';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
})
export class SubscriptionComponent {
  subscriptions: Subscription[] = [];
  realState: RealState[] = [];
  subscriptionNo: string;
  testform: FormGroup;
  show: boolean = false;
  sansation: boolean = false;
  real:number
  formData: Subscription;
  constructor(
    public supscriptionService: SupscriptionService,
    public fb: FormBuilder,
    public realStateService: RealStateService
  ) {}

  ngOnInit() {
    this.realStateService.getAll().subscribe((data) => {
      this.realState = data;
      console.log(this.realState);
    });

    this.testform = this.fb.group({
      id: [''],
      subscriberCode: [''],
      realStateType: [''],
      unitNo: [''],
      isThereSanitation: [''],
      lastReading: [''],
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
      this.supscriptionService.getById(this.subscriptionNo).subscribe({
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
      id: data.id,
      subscriberCode: data.subscriberCode,
      realStateType: data.realStateType,
      unitNo: data.unitNo,
      isThereSanitation: data.isThereSanitation,
      lastReading: data.lastReading,
      notes: data.notes,
    });
  }

  updateUser(testform: FormGroup) {
    let userData: Subscription = {
      // Initialize userData object
      id: '',
      subscriberCode: testform.value.subscriberCode,
      realStateType: 0,
      unitNo: 0,
      isThereSanitation: true,
      lastReading: '',
      notes: '',
    };
    // userData.id = testform.value.id;

    userData.isThereSanitation = testform.value.isThereSanitation;
    userData.lastReading = testform.value.lastReading;
    userData.subscriberCode=testform.value.subscriberCode
    userData.realStateType = testform.value.realStateType;
    userData.unitNo = testform.value.unitNo;
    userData.notes = testform.value.notes;
    this.supscriptionService
      .updateSubscriper(this.subscriptionNo, userData)
      .subscribe((res) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Supscription Updated Successfully',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        });
      });
    this.testform.reset();
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
