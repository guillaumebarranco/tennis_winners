import { Component } from '@angular/core';
import { TournamentComponent } from '../../components/tournament/tournament.component';
import { australianOpenWinners } from '../../data/slams/australian_open';
import { rolandGarrosWinners } from '../../data/slams/roland_garros';
import { wimbledonWinners } from '../../data/slams/wimbledon';
import { usOpenWinners } from '../../data/slams/us_open';
import { TournamentFinal } from '../../models/slam-final';
import { TournamentsMixComponent } from '../../components/tournaments-mix/tournaments-mix.component';

@Component({
  selector: 'app-slams',
  styleUrls: ['./slams.component.scss'],
  templateUrl: './slams.component.html',
  imports: [TournamentComponent, TournamentsMixComponent]
})
export class SlamsComponent {
  public australianOpenFinals: TournamentFinal[] = australianOpenWinners;
  public rolandGarrosFinals: TournamentFinal[] = rolandGarrosWinners;
  public wimbledonFinals: TournamentFinal[] = wimbledonWinners;
  public usOpenFinals: TournamentFinal[] = usOpenWinners;

  public onlyFrom2000 = true;  

  public getGrandsSlamsMixTournaments() {
    return {
      ao: this.australianOpenFinals,
      rg: this.rolandGarrosFinals,
      wi: this.wimbledonFinals,
      us: this.usOpenFinals
    }
  }

  public getGrandsSlamsMixKeys() {
    return ['ao', 'rg', 'wi', 'us'];
  }

  public getGrandsSlamsMixLabels() {
    return ["Open d'Australie", 'Roland-Garros', 'Wimbledon', 'US Open'];
  }
}
