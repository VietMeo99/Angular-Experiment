import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { DeleteBrandComponent } from './delete-brand.component';
import { ButtonModule } from 'app/components/common/button/button.module';

@NgModule({
  declarations: [DeleteBrandComponent],
  imports: [CommonModule, TranslateModule, NzModalModule, ButtonModule],
  exports: [DeleteBrandComponent],
})
export class DeleteBrandModule {}
