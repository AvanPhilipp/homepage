import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<DatepickerComponent>) { }

  ngOnInit() {
  }

  public date = new Date();
  public day = this.date.getDay();
  public time = this.date.getTime();
}
