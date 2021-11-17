import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddDayComponent } from './home-add-day.component';

describe('HomeAddDayComponent', () => {
  let component: HomeAddDayComponent;
  let fixture: ComponentFixture<HomeAddDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAddDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAddDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
