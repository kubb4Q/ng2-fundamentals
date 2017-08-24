import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { RouterModule } from '@angular/router';
import { TOASTR_TOKEN, Toastr, JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {
  EventListResolver,
  EventRouteActivator,
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  VoterService,
  CreateSessionComponent,
  SessionListComponent,
  UpVoteComponent,
  LocationValidator,
  DurationPipe
} from './events/index'
import { EventsAppComponet } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { appRoutes } from './routes'

declare let toastr: Toastr
declare let jQuery: Object

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponet,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavBarComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    UpVoteComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    EventRouteActivator,
    EventListResolver,
    VoterService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponet]
})
export class AppModule {

}

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want ot cancel?')
  }

  return true;
}