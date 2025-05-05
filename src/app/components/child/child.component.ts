import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() message: string = '';
  @Output() response = new EventEmitter<string>();

  sendReply() {
    this.response.emit('Thanks Parent! Message received.');
  }
}
