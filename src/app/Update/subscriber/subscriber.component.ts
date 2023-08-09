import { Component } from '@angular/core';
import { Supscriper } from '../../Core/_Models/supscriper';
import { SupscriperService } from '../../Core/_Services/supscriper.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css'],
})
export class SubscriberComponent {
  subscribers: Supscriper[] = [];
  subscriperNo: string | null;
  testform: FormGroup;
  show: boolean = true;
  formData: Supscriper;
  constructor(
    public supscriberService: SupscriperService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.supscriberService.getAll().subscribe((data) => {
      this.subscribers = data;
      console.log(this.subscribers);
    });

    this.testform = this.fb.group({
      id: [''],
      name: [''],
      city: [''],
      area: [''],
      mobile: [''],
      notes: [''],
    });
    this.submit();
  }

  profileForm = new FormGroup({
    Subscriber_No: new FormControl(''),
  });

  submit() {
    this.subscriperNo = this.profileForm.controls['Subscriber_No'].value;
    this.supscriberService.getById(this.subscriperNo).subscribe({
      next: (data) => {
        console.log(data);
        this.show=!this.show;
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
  }

  showForm(data: any) {
    this.formData = data;

    this.testform.patchValue({
      id: data.id,
      name: data.name,
      city: data.city,
      mobile: data.mobile,
      area: data.area,
      notes: data.notes,
    });
  }

  updateUser(testform: FormGroup) {
    let userData: Supscriper = {    // Initialize userData object
      id: '',
      name: '',
      area: '',
      mobile: '',
      city: '',
      notes: ''
    };
    userData.id = testform.value.id;

    userData.name = testform.value.name;
    userData.area = testform.value.area;
    userData.mobile = testform.value.mobile;
    userData.city = testform.value.city;
    userData.notes = testform.value.notes;
    this.supscriberService
      .updateSubscriper(this.subscriperNo, userData)
      .subscribe((res) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Supscriper Updated Successfully',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        })
      });
      this.testform.reset();
  }
}
