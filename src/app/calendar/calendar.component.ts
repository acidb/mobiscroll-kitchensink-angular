import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {


  myDate = new Date();
  now = new Date();
  myDates = [new Date(), new Date(this.now.setDate(5))];

  constructor() { }

  ngOnInit(): void {
  }

}
