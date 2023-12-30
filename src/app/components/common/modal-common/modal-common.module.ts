import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCommonComponent } from './modal-common.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [ModalCommonComponent],
  imports: [CommonModule, NzModalModule],
  exports: [ModalCommonComponent],
})
export class ModalCommonModule {}
