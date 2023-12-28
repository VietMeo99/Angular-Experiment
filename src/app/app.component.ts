import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  // constructor(
  //   private profileService: ProfileService,
  //   private authService: AuthService
  // ) {}

  ngOnInit(): void {
    // const token = this.authService.getToken();
    // if (Boolean(token) === true) {
    //   this.profileService.getProfileRequested().subscribe();
    // }
  }
}
