import { EventService } from './shared/event.service';
import { Resolve } from '@angular/router';
import { Component, Injectable } from '@angular/core';


@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {
  }
  resolve() {
    return this.eventService.getEvents()
  }
}