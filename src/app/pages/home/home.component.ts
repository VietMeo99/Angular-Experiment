import { Component, OnInit } from '@angular/core';
// import { ProfileService } from '../../services/profile/profile.service';
// import { AuthService } from '../../services/auth/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // constructor(
  // public profileService: ProfileService,
  // private authService: AuthService
  // ) {}

  profileService: any = {};

  ngOnInit(): void {}
  onLogout(): void {
    // this.authService.logout();
  }
}
