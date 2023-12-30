import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { ButtonModule } from '../button/button.module';
import { PromptComponent } from './prompt.component';

@NgModule({
  declarations: [PromptComponent],
  imports: [CommonModule, TranslateModule, NzModalModule, ButtonModule],
  exports: [PromptComponent],
})
export class PromptModule {}
