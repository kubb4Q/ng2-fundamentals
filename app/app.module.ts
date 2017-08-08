import { ToastrService } from './common/toastr.service';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponet } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    EventsAppComponet,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponet]
})
export class AppModule {

}