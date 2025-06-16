import { Component, OnInit } from '@angular/core';


import { WinnersComponent } from '../../components/winners/winners.component';
import { cincinnatiWinners } from '../../data/atp/masters/cincinnati';
import { indianWellsWinners } from '../../data/atp/masters/indian_wells';
import { madridWinners } from '../../data/atp/masters/madrid';
import { miamiWinners } from '../../data/atp/masters/miami';
import { monteCarloWinners } from '../../data/atp/masters/monte_carlo';
import { montrealWinners } from '../../data/atp/masters/montreal';
import { parisWinners } from '../../data/atp/masters/paris';
import { romeWinners } from '../../data/atp/masters/rome';
import { shanghaiWinners } from '../../data/atp/masters/shanghai';
import { tennisYears } from '../../data/years';
import { Winner } from '../../models/winner';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
  selector: 'app-masters-over-time',
  templateUrl: './masters-over-time.component.html',
  imports: [WinnersComponent]
})
export class MastersOverTimeComponent implements OnInit {
  public readonly MAX_WINNERS = 10;
  public readonly TIMEOUT = 200;
  public _currentWinners: {
    in: Winner[];
    mi: Winner[];
    mc: Winner[];
    ma: Winner[];
    ro: Winner[];
    mo: Winner[];
    ci: Winner[];
    sh: Winner[];
    pa: Winner[];
  } = {
      in: [],
      mi: [],
      mc: [],
      ma: [],
      ro: [],
      mo: [],
      ci: [],
      sh: [],
      pa: [],
    };

  public _currentYear: number = 2000;

  public ngOnInit(): void {

    this.calculTournamentWinners(indianWellsWinners, 'in');
    this.calculTournamentWinners(miamiWinners, 'mi');
    this.calculTournamentWinners(monteCarloWinners, 'mc');
    this.calculTournamentWinners(madridWinners, 'ma');
    this.calculTournamentWinners(romeWinners, 'ro');
    this.calculTournamentWinners(montrealWinners, 'mo');
    this.calculTournamentWinners(cincinnatiWinners, 'ci');
    this.calculTournamentWinners(shanghaiWinners, 'sh');
    this.calculTournamentWinners(parisWinners, 'pa');
  }

  public calculTournamentWinners(
    masterWinners: {year: number; winner: string; finalist: string}[],
    master: 'in' | 'mi' | 'mc' | 'ma' | 'ro' | 'mo' | 'ci' | 'sh' |'pa' ,
    index = 0
  ) {
    this._currentYear = tennisYears[index];

    const currentWinnerFound = this._currentWinners[master]
      .map(winner => winner.name)
      .find(winner => winner === masterWinners[index].winner);

    if (masterWinners[index]) {
      if (currentWinnerFound) {
        this._currentWinners[master] = this._currentWinners[master].map(winner =>
          winner.name !== masterWinners[index].winner
            ? {
                ...winner,
                last: false,
              }
            : {
                ...winner,
                count: winner.count + 1,
                last: true,
              }
        );
      } else {
        this._currentWinners[master] = this._currentWinners[master].map(winner => ({
          ...winner,
          last: false,
        }));

        this._currentWinners[master] = this._currentWinners[master].concat({
          count: 1,
          last: true,
          name: masterWinners[index].winner,
        });
      }
    }

    if (tennisYears[index + 1]) {
      setTimeout(() => {
        this.calculTournamentWinners(masterWinners, master, index + 1);
      }, this.TIMEOUT);
    }
  }

  public _getCurrentWinners(master: 'in' | 'mi' | 'mc' | 'ma' | 'ro' | 'mo' | 'ci' | 'sh' |'pa'): Winner[] {
    return this._currentWinners[master]
      .filter(a => !!a)
      .sort((a, b) => (a.count < b.count ? 1 : -1))
      .slice(0, this.MAX_WINNERS);
  }

  public get _currentWinnersGlobal(): Winner[] {
    return this._currentWinners.in
      .concat(this._currentWinners.mi)
      .concat(this._currentWinners.mc)
      .concat(this._currentWinners.ma)
      .concat(this._currentWinners.ro)
      .concat(this._currentWinners.mo)
      .concat(this._currentWinners.ci)
      .concat(this._currentWinners.sh)
      .concat(this._currentWinners.pa)
      .reduce((winners: Winner[], winner: Winner) => {
        if (winners.length) {
          const winnerFound = winners.find(w => w.name === winner.name);

          if (winnerFound) {
            return winners.map(w =>
              w.name !== winner.name
                ? w
                : {
                    ...w,
                    count: w.count + winner.count,
                  }
            );
          }
        }
        return winners.concat(winner);
      }, [])
      .filter(a => !!a)
      .sort((a, b) => (a.count < b.count ? 1 : -1))
      .map(winner => ({
        ...winner,
        last: false,
      }))
      .slice(0, this.MAX_WINNERS);
  }

  public get _currentWinnersIN(): Winner[] {
    return this._getCurrentWinners('in');
  }

  public get _currentWinnersMI(): Winner[] {
    return this._getCurrentWinners('mi');
  }

  public get _currentWinnersMC(): Winner[] {
    return this._getCurrentWinners('mc');
  }

  public get _currentWinnersMA(): Winner[] {
    return this._getCurrentWinners('ma');
  }

  public get _currentWinnersRO(): Winner[] {
    return this._getCurrentWinners('ro');
  }

  public get _currentWinnersMO(): Winner[] {
    return this._getCurrentWinners('mo');
  }

  public get _currentWinnersCI(): Winner[] {
    return this._getCurrentWinners('ci');
  }

  public get _currentWinnersSH(): Winner[] {
    return this._getCurrentWinners('sh');
  }

  public get _currentWinnersPA(): Winner[] {
    return this._getCurrentWinners('pa');
  }
}
