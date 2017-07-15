import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'

import { EventsAppComponet } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [
    EventsAppComponet,
    EventsListComponent,
    EventThumbnailComponent
  ],
  bootstrap: [EventsAppComponet]
})
export class AppModule {

}