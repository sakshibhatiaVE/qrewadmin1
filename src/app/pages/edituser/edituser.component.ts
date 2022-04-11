import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  submitted = false;
  employeeForm: FormGroup;
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit() {}

  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
    //   designation: ['', [Validators.required]],
    //   phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    address: ['', [Validators.required]],
    city: ['', [Validators.required]],
    country: ['', [Validators.required]],
    postalcode: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    about: ['', [Validators.required]],
    });
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.employeeForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      console.log('Employee unsuccessfully created!');
      return false;
      // return this.apiService.createEmployee(this.employeeForm.value).subscribe({
      //   complete: () => {
      //     console.log('Employee successfully created!'),
      //       this.ngZone.run(() => this.router.navigateByUrl('/manageuser'));
      //   },
      //   error: (e) => {
      //     console.log(e);
      //   },
      // });
    } else {
      return this.apiService.createEmployee(this.employeeForm.value).subscribe({
        complete: () => {
          console.log('Employee successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/manageuser'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}
