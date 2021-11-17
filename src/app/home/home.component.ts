import { Component, OnInit } from '@angular/core';
import { Day } from '../interfaces/day';
import { HomeService } from './home.service';
import { MatDialog } from '@angular/material/dialog';
import { HomeAddDayComponent } from './home-add-day/home-add-day.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  days: Day[] = [];
  day: Day = {} as Day;

  constructor(
    private homeService: HomeService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.homeService.setDays();
    this.setDays();
  }

  setDays(){
    let storageDays: string | null = localStorage.getItem("days");
    if(storageDays){
      this.days = JSON.parse(storageDays) as Day[];
    }
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
        name: this.day.name,
        day: this.days.length + 1
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.days.push(res);
        this.homeService.saveDays(this.days);
      }
    }); 
  }
}
