import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-head',
  templateUrl: './home-head.component.html',
  styleUrls: ['./home-head.component.scss'],
})
export class HomeHeadComponent implements OnInit {
  @Output() handleClick?: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // randomNumber = Math.random();
  randomNumber() {
    return Math.random();
  }

  confirm(): void {
    console.log('c :', Math.random());
  }

  onClick(): void {
    if (this.handleClick) {
      this.handleClick.emit();
    }
  }
}
