import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Day } from '../interfaces/day';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ){}

  deleteDay(day: Day){
    let storage = localStorage.getItem('days');

    if(storage){
      let days: Day[] = JSON.parse(storage) as Day[];
      days = days.filter(x => x.day != day.day);
      console.log(day);
      this.saveDays(days);
    }
  }

  saveDays(days: Day[]) {
    localStorage.setItem('days', JSON.stringify(days));
  }
  
  setDays() : void {
    this.http.get<Day[]>('../assets/days.json').subscribe((data) => {
      localStorage.setItem('days', JSON.stringify(data));
    });
  }
}
