import { Component, computed, signal } from '@angular/core';
import { TournamentComponent } from '../../components/tournament/tournament.component';
import { atpAustralianOpenWinners } from '../../data/atp/slams/australian_open';
import { atpRolandGarrosWinners } from '../../data/atp/slams/roland_garros';
import { atpWimbledonWinners } from '../../data/atp/slams/wimbledon';
import { atpUsOpenWinners } from '../../data/atp/slams/us_open';
import { wtaAustralianOpenWinners } from '../../data/wta/slams/australian_open';
import { wtaRolandGarrosWinners } from '../../data/wta/slams/roland_garros';
import { wtaWimbledonWinners } from '../../data/wta/slams/wimbledon';
import { wtaUsOpenWinners } from '../../data/wta/slams/us_open';

import { TournamentFinal } from '../../models/slam-final';
import { TournamentsMixComponent } from '../../components/tournaments-mix/tournaments-mix.component';

@Component({
  selector: 'app-slams',
  styleUrls: ['./slams.component.scss'],
  templateUrl: './slams.component.html',
  imports: [TournamentComponent, TournamentsMixComponent]
})
export class SlamsComponent {
  public atpAustralianOpenFinals = signal<TournamentFinal[]>(atpAustralianOpenWinners);
  public atpRolandGarrosFinals = signal<TournamentFinal[]>(atpRolandGarrosWinners);
  public atpWimbledonFinals = signal<TournamentFinal[]>(atpWimbledonWinners);
  public atpUsOpenFinals = signal<TournamentFinal[]>(atpUsOpenWinners);

  public wtaAustralianOpenFinals = signal<TournamentFinal[]>(wtaAustralianOpenWinners);
  public wtaRolandGarrosFinals = signal<TournamentFinal[]>(wtaRolandGarrosWinners);
  public wtaWimbledonFinals = signal<TournamentFinal[]>(wtaWimbledonWinners);
  public wtaUsOpenFinals = signal<TournamentFinal[]>(wtaUsOpenWinners);

  public australianOpenFinals = computed(() => this.showAtp() ? this.atpAustralianOpenFinals(): this.wtaAustralianOpenFinals());
  public rolandGarrosFinals = computed(() => this.showAtp() ? this.atpRolandGarrosFinals(): this.wtaRolandGarrosFinals());
  public wimbledonFinals = computed(() => this.showAtp() ? this.atpWimbledonFinals(): this.wtaWimbledonFinals());
  public usOpenFinals = computed(() => this.showAtp() ? this.atpUsOpenFinals(): this.wtaUsOpenFinals());

  public onlyFrom2000 = signal(true);
  public showAtp = signal(true);  

  public getGrandsSlamsMixTournaments() {
    return {
      ao: this.australianOpenFinals(),
      rg: this.rolandGarrosFinals(),
      wi: this.wimbledonFinals(),
      us: this.usOpenFinals()}
  }

  public getGrandsSlamsMixKeys() {
    return ['ao', 'rg', 'wi', 'us'];
  }

  public getGrandsSlamsMixLabels() {
    return ["Open d'Australie", 'Roland-Garros', 'Wimbledon', 'US Open'];
  }
}
