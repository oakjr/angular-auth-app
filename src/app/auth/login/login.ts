import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.html'
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;

  constructor(private auth: Auth, private router: Router, private userService: UserService) {}

  onLogin() {
    if (this.auth.login(this.username, this.password)) {
      this.userService.setUser({ name: 'Administrador' });
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }
}
