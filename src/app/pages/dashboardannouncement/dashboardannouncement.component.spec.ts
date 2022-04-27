import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardannouncementComponent } from './dashboardannouncement.component';

describe('DashboardannouncementComponent', () => {
  let component: DashboardannouncementComponent;
  let fixture: ComponentFixture<DashboardannouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardannouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardannouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
