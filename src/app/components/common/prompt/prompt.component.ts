import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss'],
})
export class PromptComponent {
  @Input() isVisible: boolean;

  @Output() handleConfirm: EventEmitter<any> = new EventEmitter();
  @Output() handleCancel: EventEmitter<any> = new EventEmitter();

  constructor(
    private location: Location,
    translate: TranslateService
  ) {}

  confirm(): void {
    console.log('confirm');
    this.handleConfirm.emit();
  }

  cancel(): void {
    this.handleCancel.emit();
  }
}
