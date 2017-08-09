import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'app/user/login.component.html',
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