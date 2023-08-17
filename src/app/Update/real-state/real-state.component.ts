import { Component } from '@angular/core';
import { RealStateService } from '../../Core/_Services/RealState';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { RealState } from 'src/app/Core/_Models/RealState';

@Component({
  selector: 'app-real-state',
  templateUrl: './real-state.component.html',
  styleUrls: ['./real-state.component.css'],
})
export class RealStateComponent {
  realState: RealState[] = [];
  realstate_No: number;
  testform: FormGroup;
  sansation: boolean = false;
  real: number;
  formData: RealState;
  constructor(
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
      name: [''],
      notes: [''],
    });
  }

  profileForm = new FormGroup({
    realstate_No: new FormControl(''),
  });

  updateUser(testform: FormGroup) {
    let userData: RealState = {
      id: 0,
      name: '',
      notes: '',
    };
    userData.id = testform.value.id;
    userData.name = testform.value.name;
    userData.notes = testform.value.notes;
    
    this.realStateService
      .updateSubscriper(userData.id, userData)
      .subscribe((res) => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'realState Updated Successfully',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        });
      });
    this.testform.reset();
  }

  onChange(e: any) {
    console.log(e.value);
    this.real = e.value;
    this.realStateService.getById(this.real).subscribe((data) => {
      this.formData = data;
      console.log(this.formData);
      this.testform.patchValue({
        id: this.formData.id,
        name: this.formData.name,
        notes: this.formData.notes,
      });
    });
  }
}
