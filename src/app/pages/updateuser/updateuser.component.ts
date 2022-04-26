import { Component, OnInit } from '@angular/core';

import { Employee } from './../../model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})

export class UpdateuserComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  employeeData: Employee[];
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    let ID = this.getEmployee(id);
    console.log("ID", ID);
    this.editForm = this.fb.group({
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

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getEmployee(id) {
    this.apiService.getEmployee(id).subscribe((data) => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        // designation: data['designation'],
        // phoneNumber: data['phoneNumber'],
        fname: data['fname'],
        lname: data['lname'],
        address: data['address'],
        city: data['city'],
        country: data['country'],
        postalcode: data['postalcode'],
        about: data['about'],

      });
    });
  }

  updateEmployee() {
    this.editForm = this.fb.group({
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

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure, you want to update this User?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEmployee(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/manageuser');
            console.log('Content updated successfully!');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }
}
