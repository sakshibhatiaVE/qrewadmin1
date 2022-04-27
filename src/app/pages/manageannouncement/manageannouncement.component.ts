import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-manageannouncement',
  templateUrl: './manageannouncement.component.html',
  styleUrls: ['./manageannouncement.component.scss']
})
export class ManageannouncementComponent implements OnInit {

  Announcement: any = [];

  constructor(private apiService: ApiService) {
    this.readAnnouncement();
  }

  ngOnInit() {}

  readAnnouncement() {
    this.apiService.getAnnouncements().subscribe((data) => {
      this.Announcement = data;
    });
  }

  removeAnnouncement(announcement, index) {
    if (window.confirm('Are you sure, you want to delete this Announcement?')) {
      this.apiService.deleteAnnouncement(announcement._id).subscribe((data) => {
        this.Announcement.splice(index, 1);
      });
    }
  }
}
