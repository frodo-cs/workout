import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Day } from '../interfaces/day';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ){}

  getDays() : Observable<Day[]> {
    return this.http.get<Day[]>('../assets/days.json');
  }
}
