import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  isDuration = true;
  slideToggleText = "Reps"
  constructor() { }

  ngOnInit(): void {
  }

  onSlideChange(): void {
    this.slideToggleText = this.isDuration ? "Reps" : "Duration";
  }

}
