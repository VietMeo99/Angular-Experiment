import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-common',
  templateUrl: './modal-common.component.html',
  styleUrls: ['./modal-common.component.scss'],
})
export class ModalCommonComponent implements OnInit {
  @Input() nzVisible = false;
  @Output() cancelFirst = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  nzOnCancel(): void {
    this.cancelFirst.emit();
  }
}
