import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { User, UserService } from '../../services/user';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  user$: Observable<User | null>;

  constructor(private userService: UserService) {
    this.user$ = this.userService.user$;
  }
}
