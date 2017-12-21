import { LegioEvent } from './../../typedef/legio-event';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Colors } from '../../typedef/colors';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditEventComponent>,
    @Inject(MAT_DIALOG_DATA) public event: LegioEvent
  ) { }

  ngOnInit() {
    console.log(this.event);
  }

  public onClose(){
    console.log("edit closed");
  }
  public onSave(){
    console.log("edit saved");
  }
}
