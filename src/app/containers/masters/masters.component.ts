import { Component, signal } from '@angular/core';
import { TournamentComponent } from '../../components/tournament/tournament.component';

import { atpCincinnatiWinners } from '../../data/atp/masters/cincinnati';
import { atpIndianWellsWinners } from '../../data/atp/masters/indian_wells';
import { atpMadridWinners } from '../../data/atp/masters/madrid';
import { atpMiamiWinners } from '../../data/atp/masters/miami';
import { atpMonteCarloWinners } from '../../data/atp/masters/monte_carlo';
import { atpMontrealWinners } from '../../data/atp/masters/montreal';
import { atpParisWinners } from '../../data/atp/masters/paris';
import { atpRomeWinners } from '../../data/atp/masters/rome';
import { atpShanghaiWinners } from '../../data/atp/masters/shanghai';

import { wtaCincinnatiWinners } from '../../data/wta/masters/cincinnati';
import { wtaIndianWellsWinners } from '../../data/wta/masters/indian_wells';
import { wtaMadridWinners } from '../../data/wta/masters/madrid';
import { wtaMiamiWinners } from '../../data/wta/masters/miami';
import { wtaDubaiWinners } from '../../data/wta/masters/dubai';
import { wtaCanadaWinners } from '../../data/wta/masters/canada';
import { wtaDohaWinners } from '../../data/wta/masters/doha';
import { wtaRomeWinners } from '../../data/wta/masters/rome';
import { wtaBeijingWinners } from '../../data/wta/masters/beijing';

import { TournamentFinal } from '../../models/slam-final';
import { TournamentsMixComponent } from '../../components/tournaments-mix/tournaments-mix.component';

@Component({
  selector: 'app-masters',
  styleUrls: ['./masters.component.scss'],
  templateUrl: './masters.component.html',
  imports: [TournamentComponent, TournamentsMixComponent]
})
export class MastersComponent {
  public atpCincinnatiFinals = signal<TournamentFinal[]>(atpCincinnatiWinners);
  public atpIndianWellsFinals= signal<TournamentFinal[]>(atpIndianWellsWinners);
  public atpMadridFinals= signal<TournamentFinal[]>(atpMadridWinners);
  public atpMiamiFinals= signal<TournamentFinal[]>(atpMiamiWinners);
  public atpMonteCarloFinals= signal<TournamentFinal[]>(atpMonteCarloWinners);
  public atpMontrealFinals= signal<TournamentFinal[]>(atpMontrealWinners);
  public atpParisFinals= signal<TournamentFinal[]>(atpParisWinners);
  public atpRomeFinals= signal<TournamentFinal[]>(atpRomeWinners);
  public atpShanghaiFinals= signal<TournamentFinal[]>(atpShanghaiWinners); 

  public wtaCincinnatiFinals = signal<TournamentFinal[]>(wtaCincinnatiWinners);
  public wtaIndianWellsFinals= signal<TournamentFinal[]>(wtaIndianWellsWinners);
  public wtaMadridFinals= signal<TournamentFinal[]>(wtaMadridWinners);
  public wtaMiamiFinals= signal<TournamentFinal[]>(wtaMiamiWinners);
  public wtaDubaiFinals= signal<TournamentFinal[]>(wtaDubaiWinners);
  public wtaCanadaFinals= signal<TournamentFinal[]>(wtaCanadaWinners);
  public wtaDohaFinals= signal<TournamentFinal[]>(wtaDohaWinners);
  public wtaRomeFinals= signal<TournamentFinal[]>(wtaRomeWinners);
  public wtaBeijingFinals= signal<TournamentFinal[]>(wtaBeijingWinners); 

  public onlyFrom2000 = signal(true);
  public showAtp = signal(true); 

  public getAtpMastersMixTournaments() {
    return {
      iw: this.atpIndianWellsFinals(),
      mi: this.atpMiamiFinals(),
      mc: this.atpMonteCarloFinals(),
      ma: this.atpMadridFinals(),
      ro: this.atpRomeFinals(),
      mr: this.atpMontrealFinals(),
      ci: this.atpCincinnatiFinals(),
      sh: this.atpShanghaiFinals(),
      pa: this.atpParisFinals(),
    }
  }

  public getAtpMastersMixKeys() {
    return ['iw', 'mi', 'mc', 'ma', 'ro', 'mr', 'ci', 'sh', 'pa'];
  }

  public getAtpMastersMixLabels() {
    return ['Indian Wells', 'Miami', 'Monte-Carlo', 'Madrid', 'Rome', 'Montréal', 'Cincinnati', 'Shanghai', 'Paris'];
  }

  public getWtaMastersMixTournaments() {
    return {
      iw: this.wtaIndianWellsFinals(),
      mi: this.wtaMiamiFinals(),
      du: this.wtaDubaiFinals(),
      ma: this.wtaMadridFinals(),
      ro: this.wtaRomeFinals(),
      ca: this.wtaCanadaFinals(),
      ci: this.wtaCincinnatiFinals(),
      be: this.wtaBeijingFinals(),
      do: this.wtaDohaFinals(),
    }
  }

  public getWtaMastersMixKeys() {
    return ['iw', 'mi', 'du', 'ma', 'ro', 'ca', 'ci', 'be', 'do'];
  }

  public getWtaMastersMixLabels() {
    return ['Indian Wells', 'Miami', 'Dubai', 'Madrid', 'Rome', 'Canada', 'Cincinnati', 'Beijing', 'Doha'];
  }
}
