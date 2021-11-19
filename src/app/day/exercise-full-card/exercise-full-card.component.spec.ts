import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFullCardComponent } from './exercise-full-card.component';

describe('ExerciseFullCardComponent', () => {
  let component: ExerciseFullCardComponent;
  let fixture: ComponentFixture<ExerciseFullCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseFullCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseFullCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
