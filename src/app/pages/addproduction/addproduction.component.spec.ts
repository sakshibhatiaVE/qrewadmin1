import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductionComponent } from './addproduction.component';

describe('AddproductionComponent', () => {
  let component: AddproductionComponent;
  let fixture: ComponentFixture<AddproductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
