import { Component, OnInit } from '@angular/core';
import { Auth } from './services/auth';
import { UserService, User } from './services/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  user$!: Observable<User | null>;
  isLoggedIn = false;

  constructor(
    private auth: Auth,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.user$;
    this.isLoggedIn = this.auth.isLoggedIn();

    // Se o usuário estiver logado, atualiza o observable
    if (this.isLoggedIn) {
      const user = this.auth.getUser();
      if (user) {
       (user);
      }
    }
  }

  logout(): void {
    this.auth.logout();
    this.userService.clearUser();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
