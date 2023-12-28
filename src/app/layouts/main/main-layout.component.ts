import { Component } from '@angular/core';
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router';

import { slideFadeInUp } from '../router-animations';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [slideFadeInUp],
  standalone: true,
  imports: [RouterOutlet, NzGridModule],
})
export class MainLayoutComponent {
  // prepareRoute(outlet: RouterOutlet): ActivatedRoute | boolean {
  //   return outlet.isActivated && outlet.activatedRoute;
  // }
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
