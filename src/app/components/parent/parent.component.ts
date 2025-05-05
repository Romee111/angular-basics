import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  ParentsData = "Parent Data";
  childReply: string = '';

  childResponse(response: any) {
    this.childReply = response;
  }
}
