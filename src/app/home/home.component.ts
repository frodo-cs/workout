import { Component, OnInit } from '@angular/core';
import { Day } from '../interfaces/day';
import { HomeService } from './home.service';
import { MatDialog } from '@angular/material/dialog';
import { HomeAddDayComponent } from './home-add-day/home-add-day.component';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  days: Day[] = [];
  dayModal: Day = {} as Day;
  selectedDay: Day = {} as Day;

  constructor(
    private homeService: HomeService,
    public dialog: MatDialog,
    public sharedService : SharedService,
  ) { }

  ngOnInit(): void {
    if(!localStorage.getItem('days')){
      this.homeService.setDays();   
    } 
    this.days = this.sharedService.getDays(); 
  }

  sortedDays() : Day[] {
    return this.days.sort((a,b) => {
      return a.day - b.day;
    })
  }

  addDay() : void {
    const dialogRef = this.dialog.open(HomeAddDayComponent, {
      width: '250px',
      data: {
        id: this.days.length + 1,
        day: this.days.length + 1,
        name: this.dayModal.name,
        exercises: []
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.days.push(res);
        this.homeService.saveDays(this.days);
      }
    }); 
  }

  deleteDay(day: Day){
    this.homeService.deleteDay(day);
    this.days = this.sharedService.getDays(); 
  }
}
