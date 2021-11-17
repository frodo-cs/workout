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

  saveDays(days: Day[]) {
    localStorage.setItem('days', JSON.stringify(days));
  }
  
  setDays() : void {
    this.http.get<Day[]>('../assets/days.json').subscribe((data) => {
      localStorage.setItem('days', JSON.stringify(data));
    });
  }
}
