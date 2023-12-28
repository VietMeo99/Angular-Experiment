import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-widget',
  templateUrl: './home-widget.component.html',
  styleUrls: ['./home-widget.component.scss'],
})
export class HomeWidgetComponent implements OnInit {
  @Input() label: string = '';
  @Input() icon: string = '';
  constructor() {}

  ngOnInit(): void {}
}
