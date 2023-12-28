import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HomeComponent } from './home.component';
import { HomeBodyComponent } from '../../components/home/home-body/home-body.component';
import { HomeHeadComponent } from '../../components/home/home-head/home-head.component';
import { HomeWidgetComponent } from '../../components/home/home-widget/home-widget.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeBodyComponent,
    HomeHeadComponent,
    HomeWidgetComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, NzGridModule, NzLayoutModule],
})
export class HomeModule {}
