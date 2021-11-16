import { Component, OnInit } from '@angular/core';
import { Day } from '../interfaces/day';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  days: Day[] = [];
  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getDays().subscribe(res => this.days = res);
  }

}
