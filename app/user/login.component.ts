import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'app/user/login.component.html',
  styles: [`
    em {
      float: right;
      color: #e05c65;
      padding-left: 10px;
    }
  `]
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {

  }
  login(formValues) {
    this.authService.lognUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }
}