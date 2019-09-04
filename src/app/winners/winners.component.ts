import { Component, Input } from '@angular/core';

import { Winner } from 'app/models/winner';

@Component({
  selector: 'app-winners',
  styleUrls: ['./winners.component.scss'],
  templateUrl: './winners.component.html',
})
export class WinnersComponent {
  @Input() public winners: Winner[];
}
