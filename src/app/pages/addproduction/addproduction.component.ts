import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
// import { Component, OnInit, NgZone, ElementRef } from '@angular/core';

import {MatAccordion} from '@angular/material/expansion';
import { FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-addproduction',
  templateUrl: './addproduction.component.html',
  styleUrls: ['./addproduction.component.scss']
})
export class AddproductionComponent implements OnInit {
  formControlItem: FormControl = new FormControl("");

  required: boolean = !1;
  @ViewChild("timepicker") timepicker: any;

  addprodselectForm: FormGroup;
  addproddisplayForm: FormGroup;
  submitted = false;

  selectedItemsList = [];

startdate = "";
enddate = "";
starttime = "";
endtime = "";

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    // private _eref: ElementRef
  ) {
    this.mainForm();
   }

   mainForm() {
    this.addprodselectForm = this.fb.group({
      prodstart: ['', [Validators.required]],
      prodend: ['', [Validators.required]],
      starttime: ['', [Validators.required]],
      endtime: ['', [Validators.required]],
    });
    // this.addproddisplayForm = this.fb.group({
    //   prodstart: ['', [Validators.required]],
    //   prodend: ['', [Validators.required]],
    // });
  }

  ngOnInit(): void {
  }
  

  openFromIcon(timepicker: { open: () => void }) {
    if (!this.formControlItem.disabled) {
      // timepicker.open();
      console.log("timepicker.open()");
      // this.starttime = this.formControlItem.value;
      // console.log("test", this.starttime);
    }
    // this.starttime = formControlItem.value;
    // console.log("test", formControlItem.value);
  }

  onClear($event: Event) {
    this.formControlItem.setValue(null);
  }
  

  data: any = [{
    "parentName": "Date",
    "childProperties":
      [
        { "propertyName": "Property One" },
        { "propertyName": "Property Two" }
      ]
  }, {
    "parentName": "Time",
    "childProperties":
      [
        { "propertyName": "Property Three" },
        { "propertyName": "Property Four" },
        { "propertyName": "Property Five" },
      ]
  }, {
    "parentName": "Tags",
    "childProperties":
      [
        { "propertyName": "Property Six" },
        { "propertyName": "Property Seven" },
        { "propertyName": "Property Eight" },
      ]
  },
  {
    "parentName": "Resources",
    "childProperties":
      [
        { "propertyName": "Property One" },
        { "propertyName": "Property Two" }
      ]
  },
  {
    "parentName": "Assign Jobs",
    "childProperties":
      [
        { "propertyName": "Property One" },
        { "propertyName": "Property Two" }
      ]
  },];

  toggleAccordian(event, index) {
    const element = event.target;
    element.classList.toggle("active");
    if (this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  onSubmit() {
    this.submitted = true;
    if (!this.addprodselectForm.valid) {
      console.log('Product unsuccessfully created!');
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
      return this.apiService.createAnnouncement(this.addprodselectForm.value).subscribe({
        complete: () => {
          console.log('Product successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/addproduction'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }

  emailFormArray: Array<any> = [];
  JSON:[]
  categories = [ 
    {name :"Soccer", id: 1, isChecked: false},
    {name :"Tennis", id: 2, isChecked: false},
    {name :"Golf", id: 3, isChecked: false},
    {name :"News", id: 4, isChecked: false},
    {name :"Cricket", id: 5, isChecked: false},
    {name :"Wildlife", id: 6, isChecked: false},
    {name :"Sci-github", id: 7, isChecked: false},
    {name :"Wildlife", id: 8, isChecked: false}
  ];

  onChange(email:string, isChecked: boolean) {
      if(isChecked) {
        this.emailFormArray.push(email);
      } else {
        let index = this.emailFormArray.indexOf(email);
        this.emailFormArray.splice(index,1);
      }
      
  }


  duplicate() {
    console.log(this.emailFormArray);
  }

  
SendDataonChange1(event: any) {
// console.log("SendDataonChange1", event.target.value);
this.startdate = event.target.value;
}
SendDataonChange2(event: any) {
  // console.log("SendDataonChange1",event.target.value);
  this.enddate = event.target.value;
  }
  onChangeHour1(event){
    // console.log("onChangeHour1", event);
    this.starttime = event;
    console.log("onChangeHour1", this.starttime);
  }
  onChangeHour2(event){
    this.endtime = event;
    // console.log("onChangeHour2", event);
  }

}
