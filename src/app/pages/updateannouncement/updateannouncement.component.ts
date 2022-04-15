import { Component, OnInit, NgZone, ElementRef } from '@angular/core';

import { Announcement } from './../../model/Announcement';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-updateannouncement',
  templateUrl: './updateannouncement.component.html',
  styleUrls: ['./updateannouncement.component.scss']
})
export class UpdateannouncementComponent implements OnInit {

  Announcement: any = [];
  newItem = {
    EndTime: null,
    StartTime: null
  };
  dynamicId;


  model: NgbDateStruct;
  submitted = false;
  updateannouncementForm: FormGroup;
  announcementData: Announcement[];
  AnnouncementProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin'];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private ngZone: NgZone,
    private _eref: ElementRef
  ) {}

  ngOnInit() {
    this.updateAnnouncement();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getAnnouncement(id);
    let ID = this.getAnnouncement(id);
    console.log("ID", ID);
    this.updateannouncementForm = this.fb.group({
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
    document.getElementById("begin-date").innerHTML = "2014-02-09";
   
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

  // Choose options with select-dropdown
  updateProfile(e) {
    this.updateannouncementForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }

  // Getter to access form control
  get myForm() {
    return this.updateannouncementForm.controls;
  }

  getAnnouncement(id) {
    this.apiService.getAnnouncement(id).subscribe((data) => {
      console.log("DATA--- getAnnouncement", data);
      this.updateannouncementForm.setValue({
        addannouncement: data['addannouncement'],
        addannouncementbegin: data['addannouncementbegin'],
        addannouncementend: data['addannouncementend'],
      });
      // console.log("data", data);
    });
  }

  updateAnnouncement() {
    this.updateannouncementForm = this.fb.group({
      addannouncement: ['', [Validators.required]],
      addannouncementbegin: ['', [Validators.required]],
      addannouncementend: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (!this.updateannouncementForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure, you want to Update this Role?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateAnnouncement(id, this.updateannouncementForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/manageannouncement');
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