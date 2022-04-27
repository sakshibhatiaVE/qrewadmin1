import { Component, OnInit } from '@angular/core';

import { Role } from './../../model/Role';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-updaterole',
  templateUrl: './updaterole.component.html',
  styleUrls: ['./updaterole.component.scss']
})
export class UpdateroleComponent implements OnInit {

  submitted = false;
  editroleForm: FormGroup;
  roleData: Role[];
  RoleProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateRole();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getRole(id);
    let ID = this.getRole(id);
    console.log("ID", ID);
    this.editroleForm = this.fb.group({
      rolename: ['', [Validators.required]],
    });
  }

  // Choose options with select-dropdown
  updateProfile(e) {
    this.editroleForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editroleForm.controls;
  }

  getRole(id) {
    this.apiService.getRole(id).subscribe((data) => {
      this.editroleForm.setValue({
        rolename: data['rolename'],
      });
    });
  }

  updateRole() {
    this.editroleForm = this.fb.group({
      rolename: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editroleForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure, you want to Update this Role?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateRole(id, this.editroleForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/managerole');
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

