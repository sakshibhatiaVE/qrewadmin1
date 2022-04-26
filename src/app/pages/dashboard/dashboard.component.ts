import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  name = 'Angular Toggle Show Hide';
  showMyContainer: boolean = false;

  ngOnInit(): void {
  }



  title = 'angular-checkbox-list-demo';

  selectedItemsList = [];
  checkedIDs = [];

  checkboxesDataList = [
    {
      id: '1',
      label: 'Add Announcement',
      isChecked: false
    },
    {
      id: '2',
      label: 'Add Production',
      isChecked: false
    },
    {
      id: '3',
      label: 'Create User',
      isChecked: false
    },
    {
      id: '4',
      label: 'Create Rejected',
      isChecked: false
    },
    {
      id: '5',
      label: 'Booking Requiest',
      isChecked: false
    },
    {
      id: '6',
      label: 'Confirmed Booking',
      isChecked: false
    },
    {
      id: 'C006',
      label: 'Drawing',
      isChecked: false
    },
    {
      id: '7',
      label: 'Gyming',
      isChecked: false
    },
    {
      id: '8',
      label: 'Cooking',
      isChecked: false
    },
    {
      id: '9',
      label: 'Scrapbooking',
      isChecked: false
    }
  ]

  

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems() {
    this.selectedItemsList = this.checkboxesDataList.filter((value, index) => {
      return value.isChecked
    });
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value.id);
      }
    });
  }

}
