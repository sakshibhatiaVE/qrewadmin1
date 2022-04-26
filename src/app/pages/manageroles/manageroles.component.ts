import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-manageroles',
  templateUrl: './manageroles.component.html',
  styleUrls: ['./manageroles.component.scss']
})
export class ManagerolesComponent implements OnInit {
  Role: any = [];

  constructor(private apiService: ApiService) {
    this.readRole();
  }

  ngOnInit() {}

  readRole() {
    // var getRols ="http://localhost:4000/api/getroles"
    this.apiService.getRoles().subscribe((data) => {
      this.Role = data;
    });
  }

  removeRole(role, index) {
    if (window.confirm('Are you sure, you want to delete this Role?')) {
      this.apiService.deleteRole(role._id).subscribe((data) => {
        this.Role.splice(index, 1);
      });
    }
  }
}
