import { EventService, ISession } from '../events/index';
import { AuthService } from '../user/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/nav/navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px}
    #searchForm {margin-right: 100px}
    @media (max-width: 1200px) {#searchForm {dispay:none}}
    li > a.active {color: #F97924}
  `]
})

export class NavBarComponent {
  searchTerm: string = ""
  foundSessions: ISession[]
  constructor(private authService: AuthService, private eventService: EventService) {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions
      }
    )
  }
}