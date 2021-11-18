import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDayAddComponent } from './exercise-day-add.component';

describe('ExerciseDayAddComponent', () => {
  let component: ExerciseDayAddComponent;
  let fixture: ComponentFixture<ExerciseDayAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDayAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
