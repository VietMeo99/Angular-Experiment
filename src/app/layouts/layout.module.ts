import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
// import { NzListModule } from 'ng-zorro-antd/list';

import { AuthLayoutComponent } from './auth/auth-layout.component';
import { MainLayoutComponent } from './main/main-layout.component';

@NgModule({
  // declarations: [AuthLayoutComponent, MainLayoutComponent],
  imports: [CommonModule, RouterModule, NzGridModule],
  // exports: [AuthLayoutComponent, MainLayoutComponent],
})
export class LayoutModule {}
