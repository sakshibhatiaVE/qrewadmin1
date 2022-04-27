import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.scss']
})
export class AddroleComponent implements OnInit {

  submitted = false;
  roleForm: FormGroup;
  RoleProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

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
    this.roleForm = this.fb.group({
      rolename: ['', [Validators.required]],
    });
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.roleForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.roleForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.roleForm.valid) {
      console.log('Role unsuccessfully created!');
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
      return this.apiService.createRole(this.roleForm.value).subscribe({
        complete: () => {
          console.log('Role successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/managerole'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}

