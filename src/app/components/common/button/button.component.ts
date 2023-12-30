import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() buttonType: 'primary' | 'cancel' | 'delete';
  @Input() type?: 'submit' | 'button';
  @Input() loading: boolean;
  @Input() disabled: boolean;

  @Output() handleClick?: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClick(): void {
    if (this.handleClick) {
      this.handleClick.emit();
    }
  }
}
