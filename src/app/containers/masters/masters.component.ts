import { Component } from '@angular/core';
import { TournamentComponent } from '../../components/tournament/tournament.component';

import { cincinnatiWinners } from '../../data/masters/cincinnati';
import { indianWellsWinners } from '../../data/masters/indian_wells';
import { madridWinners } from '../../data/masters/madrid';
import { miamiWinners } from '../../data/masters/miami';
import { monteCarloWinners } from '../../data/masters/monte_carlo';
import { montrealWinners } from '../../data/masters/montreal';
import { parisWinners } from '../../data/masters/paris';
import { romeWinners } from '../../data/masters/rome';
import { shanghaiWinners } from '../../data/masters/shanghai';

import { TournamentFinal } from '../../models/slam-final';
import { TournamentsMixComponent } from '../../components/tournaments-mix/tournaments-mix.component';

@Component({
  selector: 'app-masters',
  styleUrls: ['./masters.component.scss'],
  templateUrl: './masters.component.html',
  imports: [TournamentComponent, TournamentsMixComponent]
})
export class MastersComponent {
  public cincinnatiFinals: TournamentFinal[] = cincinnatiWinners;
  public indianWellsFinals: TournamentFinal[] = indianWellsWinners;
  public madridFinals: TournamentFinal[] = madridWinners;
  public miamiFinals: TournamentFinal[] = miamiWinners;
  public monteCarloFinals: TournamentFinal[] = monteCarloWinners;
  public montrealFinals: TournamentFinal[] = montrealWinners;
  public parisFinals: TournamentFinal[] = parisWinners;
  public romeFinals: TournamentFinal[] = romeWinners;
  public shanghaiFinals: TournamentFinal[] = shanghaiWinners; 

  public onlyFrom2000 = true;  

  public getGrandsSlamsMixTournaments() {
    return {
      iw: this.indianWellsFinals,
      mi: this.miamiFinals,
      mc: this.monteCarloFinals,
      ma: this.madridFinals,
      ro: this.romeFinals,
      mr: this.montrealFinals,
      ci: this.cincinnatiFinals,
      sh: this.shanghaiFinals,
      pa: this.parisFinals,
    }
  }

  public getGrandsSlamsMixKeys() {
    return ['iw', 'mi', 'mc', 'ma', 'ro', 'mr', 'ci', 'sh', 'pa'];
  }

  public getGrandsSlamsMixLabels() {
    return ['Indian Wells', 'Miami', 'Monte-Carlo', 'Madrid', 'Rome', 'Montréal', 'Cincinnati', 'shanghai', 'Paris'];
  }
}
