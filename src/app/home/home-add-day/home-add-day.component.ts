import { Day } from './../../interfaces/day';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-home-add-day',
  templateUrl: './home-add-day.component.html',
  styleUrls: ['./home-add-day.component.scss']
})
export class HomeAddDayComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HomeAddDayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Day) { }

  ngOnInit(): void {
  }

  cancel() : void {
    this.dialogRef.close();
  }
}
