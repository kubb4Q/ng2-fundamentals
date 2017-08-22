import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';
import { NgForm } from '@angular/forms/src/directives';
import { NgFor } from '@angular/common/src/directives/ng_for_of';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { $NBSP } from '@angular/compiler/src/chars';
import { Component } from '@angular/core';
import { selector } from 'rxjs/operator/multicast';


@Component({
  template: `
    <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5"> 
        <event-thumbnail [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventsListComponent {
  events: IEvent[]
  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events']
  }
}