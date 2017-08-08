import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';
import { NgForm } from '@angular/forms/src/directives';
import { NgFor } from '@angular/common/src/directives/ng_for_of';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { $NBSP } from '@angular/compiler/src/chars';
import { Component } from '@angular/core';
import { selector } from 'rxjs/operator/multicast';


@Component({
  selector: 'events-list',
  template: `
    <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5"> 
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventsListComponent {
  events: any[]
  constructor(private eventService: EventService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }
}