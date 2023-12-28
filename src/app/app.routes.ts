import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main/main-layout.component';
import { AuthGuard } from './shared/auth.guard';

export const routes: Routes = [
  // {
  //   path: 'auth',
  //   component: AuthLayoutComponent,
  //   canActivateChild: [UnAuthGuard],
  //   loadChildren: () =>
  //     // import('./pages/auth/auth.module').then((m) => m.AuthModule),
  //     import('./pages/home/home.module').then((m) => m.HomeModule),
  // },
  {
    path: '',
    component: MainLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      // {
      //   path: 'guide',
      //   loadChildren: () =>
      //     import('./pages/guide/guide.module').then((m) => m.GuideModule),
      // },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       initialNavigation: 'enabled',
//     }),
//     LayoutModule,
//   ],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
