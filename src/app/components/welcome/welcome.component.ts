import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DatepickerComponent } from './../../parts/datepicker/datepicker.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _dialog: MatDialog) { }

  ngOnInit() {
  }

  public selectedDate: Date

  public onDateSelect(){
    console.log("choose date");
    let dialog = this._dialog.open(DatepickerComponent);
    dialog.afterClosed().subscribe(selection => {
        console.log(selection);
        // if (selection) {
        //   this.selectedEmoji = selection;
        // } else {
        //   // User clicked 'Cancel' or clicked outside the dialog
        // }
      });
  }
}
