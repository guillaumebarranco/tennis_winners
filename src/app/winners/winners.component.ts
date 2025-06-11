import { Component, input } from '@angular/core';

import { Winner } from '../models/winner';

@Component({
  selector: 'app-winners',
  styleUrls: ['./winners.component.scss'],
  templateUrl: './winners.component.html',
})
export class WinnersComponent {
  public winners = input.required<Winner[]>();
}
