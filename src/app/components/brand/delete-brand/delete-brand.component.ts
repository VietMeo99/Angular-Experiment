import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-delete-brand',
  templateUrl: './delete-brand.component.html',
  styleUrls: ['./delete-brand.component.scss'],
})
export class DeleteBrandComponent {
  @Input() id: string;
  @Input() isVisible: boolean;

  @Output() handleCancel: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private location: Location,
    translate: TranslateService
  ) {}

  confirm(): void {}

  cancel(): void {
    this.handleCancel.emit();
  }
}
