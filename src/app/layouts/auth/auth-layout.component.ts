import { Component } from '@angular/core';
import { slideFadeInUp } from '../router-animations';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  animations: [slideFadeInUp],
  standalone: true,
  imports: [RouterOutlet, NzGridModule],
})
export class AuthLayoutComponent {
  // prepareRoute(outlet: RouterOutlet): ActivatedRoute {
  //   return outlet.isActivated && outlet.activatedRoute;
  // }
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
