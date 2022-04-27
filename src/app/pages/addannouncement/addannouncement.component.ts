
import { Component, OnInit, NgZone, ElementRef } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-addannouncement',
  templateUrl: './addannouncement.component.html',
  styleUrls: ['./addannouncement.component.scss']
})
export class AddannouncementComponent implements OnInit {

  newItem = {
    EndTime: null,
    StartTime: null
  };
  dynamicId;
  


  model: NgbDateStruct;
  submitted = false;
  addannouncementForm: FormGroup;
  AddannouncementProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];
// console.log(addannouncementForm);
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private _eref: ElementRef
  ) {
    this.mainForm();
  }

  ngOnInit() {}

  mainForm() {
    this.addannouncementForm = this.fb.group({
    addannouncement: ['', [Validators.required]],
    addannouncementbegin: ['', [Validators.required]],
    addannouncementend: ['', [Validators.required]],
    });
  }

  openDatepicker(id){
    this.dynamicId = id;
    //console.log("Datepicker Reference",id);
  }
  onClick(event) {
    //console.log(event);
    if(this.dynamicId == undefined){
      console.log("Dynamic id ===============");
    }
    else if(!this._eref.nativeElement.contains(event.target)) {
      let self = this;
      setTimeout(function(){
        self.dynamicId.close();    
      },10);
    }
  }


  // Choose designation with select dropdown
  updateProfile(e) {
    this.addannouncementForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.addannouncementForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.addannouncementForm.valid) {
      console.log('Employee unsuccessfully created!');
      return false;
      // return this.apiService.createAnnouncement(this.addannouncementForm.value).subscribe({
      //   complete: () => {
      //     console.log('Employee successfully created!'),
      //       this.ngZone.run(() => this.router.navigateByUrl('/manageuser'));
      //   },
      //   error: (e) => {
      //     console.log(e);
      //   },
      // });
    } else {
      return this.apiService.createAnnouncement(this.addannouncementForm.value).subscribe({
        complete: () => {
          console.log('Announcement successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/manageannouncement'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}

