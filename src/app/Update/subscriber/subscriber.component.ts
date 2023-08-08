import { Component } from '@angular/core';
import { Supscriper } from '../../Core/_Models/supscriper';
import { SupscriperService } from '../../Core/_Services/supscriper.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css'],
})
export class SubscriberComponent {
  subscribers: Supscriper[] = [];
  subscriperNo: string | null;
  show: boolean = true;
  constructor(public supscriberService: SupscriperService) {}

  ngOnInit() {
    this.supscriberService.getAll().subscribe((data) => {
      this.subscribers = data;
      console.log(this.subscribers);
    });
  }

  profileForm = new FormGroup({
    Subscriber_No: new FormControl(''),
  });

  submit() {
    this.subscriperNo = this.profileForm.controls['Subscriber_No'].value;
    this.supscriberService.getById(this.subscriperNo).subscribe({
      next: (data) => {
        console.log(data);
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
}
