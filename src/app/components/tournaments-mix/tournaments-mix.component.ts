import { Component, computed, input } from '@angular/core';
import { tennisYears } from '../../data/years';
import { TournamentFinal } from '../../models/slam-final';
import { getPlayerBackgroundColor } from '../../utils/tournament.utils';

@Component({
  selector: 'app-tournaments-mix',
  styleUrls: ['./tournaments-mix.component.scss'],
  templateUrl: './tournaments-mix.component.html',
})
export class TournamentsMixComponent {
  public tournamentsMixName = input.required<string>();
  public tournamentsMixFinals = input.required<{[key: string]: TournamentFinal[]}>();
  public tournamentsMixKeys = input.required<string[]>();
  public tournamentsMixLabels = input.required<string[]>();
  public onlyFrom2000 = input<boolean>(true);
  public years = tennisYears;

  public tournamentsByYears = computed(() => {
    const data =  this.years.map(year => {
      console.log('year', year);
      console.log('tournamentsMixKeys', this.tournamentsMixKeys());
      console.log('tournamentsMixFinals', this.tournamentsMixFinals());
      return {
        year,
        finals: this.tournamentsMixKeys().map(key => {
          return {
            key,
            ...this.tournamentsMixFinals()[key].find(final => final.year === year)
          }
        })
      }
    });

    return data;
  })

  public getPlayerBackgroundColor = getPlayerBackgroundColor;
}
