import { LegioEvent } from './../typedef/legio-event';
import { Injectable, OnInit } from '@angular/core';
import { Colors } from '../typedef/colors';

@Injectable()
export class EventService {

  constructor() { }

  OnInit(){
  }


  private _eventList: LegioEvent[] = [{
    desc: "First Raid",
    title: "Raid on gauls",
    start: new Date(),
    color: Colors.red
  }];

  public get events(){
    return this._eventList;
  }

}
