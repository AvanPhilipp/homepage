import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'fea-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private subject : Subject<string> = new Subject();
  public subscription = this.subject.asObservable();

  public events: string[] = [];

  public subscribe(){
    this.subscription.subscribe(event=>{
      this.events.push(event);
    });
  }

  public addEvent(){
    this.subject.next("event");
  }

}
