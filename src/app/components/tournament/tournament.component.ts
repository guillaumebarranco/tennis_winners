import { Component, input } from '@angular/core';
import { TournamentFinal } from '../../models/slam-final';
import { getPlayerBackgroundColor, isFiveSetsMatch } from '../../utils/tournament.utils';

@Component({
  selector: 'app-tournament',
  styleUrls: ['./tournament.component.scss'],
  templateUrl: './tournament.component.html',
})
export class TournamentComponent {
  public tournamentName = input.required<string>();
  public tournamentFinals = input.required<TournamentFinal[]>();
  public onlyFrom2000 = input<boolean>(true);

  public getPlayerBackgroundColor = getPlayerBackgroundColor;
}
