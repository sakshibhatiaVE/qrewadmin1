import { Component, OnInit } from "@angular/core";

import { User } from './../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  submitted = false;
  edituserForm: FormGroup;
  userData: User[];
  UserProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateUser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUser(id);
    let ID = this.getUser(id);
    console.log("ID", ID);
    this.edituserForm = this.fb.group({
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
    this.edituserForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.edituserForm.controls;
  }

  getUser(id) {
    this.apiService.getUser(id).subscribe((data) => {
      this.edituserForm.setValue({
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

  updateUser() {
    this.edituserForm = this.fb.group({
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
    if (!this.edituserForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure, you want to update this User Profile?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateUser(id, this.edituserForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/dashboard');
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
