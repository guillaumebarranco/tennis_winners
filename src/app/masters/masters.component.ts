import { Component, OnInit } from '@angular/core';

import { cincinnatiWinners } from 'app/data/masters/cincinnati';
import { indianWellsWinners } from 'app/data/masters/indian_wells';
import { madridWinners } from 'app/data/masters/madrid';
import { miamiWinners } from 'app/data/masters/miami';
import { monteCarloWinners } from 'app/data/masters/monte_carlo';
import { montrealWinners } from 'app/data/masters/montreal';
import { parisWinners } from 'app/data/masters/paris';
import { romeWinners } from 'app/data/masters/rome';
import { shangaiWinners } from 'app/data/masters/shangai';
import { mastersYears } from 'app/data/masters/years';
import { yearsSinceOpenEra } from 'app/data/slams/years';
import { Winner } from 'app/models/winner';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
})
export class MastersComponent implements OnInit {
  public readonly MAX_WINNERS = 10;
  public readonly TIMEOUT = 100;
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
  };
  public _currentYear: number;

  public ngOnInit(): void {
    this._currentWinners = {
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

    this.calculTournamentWinners(indianWellsWinners, 'in');
    this.calculTournamentWinners(miamiWinners, 'mi');
    this.calculTournamentWinners(monteCarloWinners, 'mc');
    this.calculTournamentWinners(madridWinners, 'ma');
    this.calculTournamentWinners(romeWinners, 'ro');
    this.calculTournamentWinners(montrealWinners, 'mo');
    this.calculTournamentWinners(cincinnatiWinners, 'ci');
    this.calculTournamentWinners(shangaiWinners, 'sh');
    this.calculTournamentWinners(parisWinners, 'pa');
  }

  public calculTournamentWinners(
    openWinners: string[],
    open: string,
    index = 0
  ) {
    this._currentYear = mastersYears[index];

    const currentWinnerFound = this._currentWinners[open]
      .map(winner => winner.name)
      .find(winner => winner === openWinners[index]);

    if (openWinners[index]) {
      if (currentWinnerFound) {
        this._currentWinners[open] = this._currentWinners[open].map(winner =>
          winner.name !== openWinners[index]
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
        this._currentWinners[open] = this._currentWinners[open].map(winner => ({
          ...winner,
          last: false,
        }));

        this._currentWinners[open] = this._currentWinners[open].concat({
          count: 1,
          last: true,
          name: openWinners[index],
        });
      }
    }

    if (yearsSinceOpenEra[index + 1]) {
      setTimeout(() => {
        this.calculTournamentWinners(openWinners, open, index + 1);
      }, this.TIMEOUT);
    }
  }

  public _getCurrentWinners(open: string): Winner[] {
    return this._currentWinners[open]
      .filter(a => a !== '')
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
