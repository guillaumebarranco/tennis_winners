import { Component, OnInit } from '@angular/core';

import { australianOpenWinners } from 'app/data/slams/australian_open';
import { rolandGarrosWinners } from 'app/data/slams/roland_garros';
import { usOpenWinners } from 'app/data/slams/us_open';
import { wimbledonWinners } from 'app/data/slams/wimbledon';
import { yearsSinceOpenEra } from 'app/data/slams/years';
import { Winner } from 'app/models/winner';

@Component({
  selector: 'app-slams',
  templateUrl: './slams.component.html',
})
export class SlamsComponent implements OnInit {
  public readonly MAX_WINNERS = 10;
  public readonly TIMEOUT = 100;
  public _currentWinners: {
    ao: Winner[];
    rg: Winner[];
    us: Winner[];
    wb: Winner[];
  };
  public _currentYear: number;

  public ngOnInit(): void {
    this._currentWinners = {
      ao: [],
      rg: [],
      us: [],
      wb: [],
    };

    this.calculTournamentWinners(australianOpenWinners, 'ao');
    this.calculTournamentWinners(rolandGarrosWinners, 'rg');
    this.calculTournamentWinners(wimbledonWinners, 'wb');
    this.calculTournamentWinners(usOpenWinners, 'us');
  }

  public calculTournamentWinners(
    openWinners: string[],
    open: string,
    index = 0
  ) {
    this._currentYear = yearsSinceOpenEra[index];

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
      .filter(a => !!a)
      .sort((a, b) => (a.count < b.count ? 1 : -1))
      .slice(0, this.MAX_WINNERS);
  }

  public get _currentWinnersGlobal(): Winner[] {
    return this._currentWinners.ao
      .concat(this._currentWinners.rg)
      .concat(this._currentWinners.wb)
      .concat(this._currentWinners.us)
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

  public get _currentWinnersAO(): Winner[] {
    return this._getCurrentWinners('ao');
  }

  public get _currentWinnersRG(): Winner[] {
    return this._getCurrentWinners('rg');
  }

  public get _currentWinnersWB(): Winner[] {
    return this._getCurrentWinners('wb');
  }

  public get _currentWinnersUS(): Winner[] {
    return this._getCurrentWinners('us');
  }
}
