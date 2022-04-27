import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { VERSION } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';


import { Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'app-employee-list',
  templateUrl: './manageuser.component.html',
  // styleUrls: ['./manageuser.component.css'],
})

export class ManageUser implements OnInit {
  Employee: any = [];

  startIndex = 0;
  endIndex = 8;
  data$: Observable<any>;

  

  employee: Observable<any>;
  
  title = 'Angular Pagination Tutorial';
  // Some array of things.
  public employeedata = [];
  // Pagination parameters.
  p: Number = 1;
  count: Number = 5;

  constructor(private apiService: ApiService, private httpClient: HttpClient) {
    this.readEmployee();

    
  }
  

  getArrayLenght(length) {
    return new Array(length / 20);
  }

  ngOnInit() {
    this.data$ = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    
  }

  readEmployee() {
    this.apiService.getEmployees().subscribe((data) => {
      this.Employee = data;
    });
    console.log("this.Employee",this.Employee);
  }

  removeEmployee(employee, index) {
    if (window.confirm('Are you sure, you want to delete this User?')) {
      this.apiService.deleteEmployee(employee._id).subscribe((data) => {
        this.Employee.splice(index, 1);
      });
    }
  }

  getIndex(pageIndex) {
    this.startIndex = pageIndex * 8;
    this.endIndex = this.startIndex + 8;
    console.log(this.startIndex);
    console.log(pageIndex);
  }
  prevIndex(length) {
    this.startIndex = length * 0;
    console.log(this.startIndex);
  }
  nextIndex(endIndex) {
    this.endIndex++;
    console.log(this.endIndex);
  }



  
}
