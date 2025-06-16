import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { australianOpenWinners } from '../../data/slams/australian_open';
import { rolandGarrosWinners } from '../../data/slams/roland_garros';
import { usOpenWinners } from '../../data/slams/us_open';
import { wimbledonWinners } from '../../data/slams/wimbledon';
import { tennisYears } from '../../data/years';
import { Winner } from '../../models/winner';
import { WinnersComponent } from '../../components/winners/winners.component';

@Component({
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ],
  selector: 'app-slams-over-time',
  templateUrl: './slams-over-time.component.html',
  imports: [WinnersComponent]
})
export class SlamsOverTimeComponent implements OnInit {
  public readonly MAX_WINNERS = 10;
  public readonly TIMEOUT = 200;
  public _currentWinners: {
    ao: Winner[];
    rg: Winner[];
    us: Winner[];
    wb: Winner[];
  } = {
      ao: [],
      rg: [],
      us: [],
      wb: [],
    };
  public _currentYear: number = 2000;

  public ngOnInit(): void {

    this.calculTournamentWinners(australianOpenWinners, 'ao');
    this.calculTournamentWinners(rolandGarrosWinners, 'rg');
    this.calculTournamentWinners(wimbledonWinners, 'wb');
    this.calculTournamentWinners(usOpenWinners, 'us');
  }

  public calculTournamentWinners(
    openWinners: {year: number; winner: string; finalist: string}[],
    open: 'ao' | 'rg' | 'us' | 'wb',
    index = 0
  ) {
    this._currentYear = tennisYears[index];

    const currentWinnerFound = this._currentWinners[open]
      .map(winner => winner.name)
      .find(winner => winner === openWinners[index].winner);

    if (openWinners[index]) {
      if (currentWinnerFound) {
        this._currentWinners[open] = this._currentWinners[open].map(winner =>
          winner.name !== openWinners[index].winner
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
          name: openWinners[index].winner,
        });
      }
    }

    if (tennisYears[index + 1]) {
      setTimeout(() => {
        this.calculTournamentWinners(openWinners, open, index + 1);
      }, this.TIMEOUT);
    }
  }

  public _getCurrentWinners(open: 'ao' | 'rg' | 'us' | 'wb',): Winner[] {
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
