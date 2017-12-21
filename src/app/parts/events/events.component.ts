import { LegioEvent } from './../../typedef/legio-event';
import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from "angular-calendar";
import { CalendarEventAction } from "angular-calendar";
import { MatSnackBar, MatDialog } from '@angular/material';
import { MatIcon } from "@angular/material";
import { EditEventComponent } from '../edit-event/edit-event.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar,
    private eventService: EventService, 
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.events = this.eventService.events.map(event => {
      return {
        title: event.title,
        desc: event.desc,
        color: event.color,
        start: event.start,
        actions: this._actions
      }
    });
  }

  public view: string = 'month';

  public viewDate: Date = new Date();

  public events: LegioEvent[] = [];

  public clickedDate: Date;

  public activeDayIsOpen: boolean = false;

  public dayStar: number = new Date().getHours();
  // public dayEnd: number = new Date().getHours() + 7;

  private openEditDialog(event: LegioEvent): void {
    let dialogRef = this.dialog.open(EditEventComponent, {
      // width: '250px',
      data: event
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The edit dialog was closed', result);
    });
  }

  private _actions: CalendarEventAction[] = [
    {
      label: '<button mat-button>Edit</button>',
      onClick: ({ event }: { event: LegioEvent }): void => {
        this.openEditDialog(event);
        console.log('Edit event', event);
      }
    },
    {
      label: '<button mat-button>Delete</button>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // this.events = this.events.filter(iEvent => iEvent !== event);
        console.log('Event deleted', event);
      }
    }
  ]

  public onDayClick(event){
    console.log(this.events[0].actions);
    if(this.activeDayIsOpen && this.viewDate.getDay() == event.day.date.getDay()){
      this.activeDayIsOpen = false;  
    }
    else{
      this.activeDayIsOpen = true;
      this.viewDate = event.day.date;  
    }
    // this.snackBar.open( event.day.date );
  }

}
