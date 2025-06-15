import { Component, computed, input } from '@angular/core';
import { tennisYears } from '../../data/years';
import { TournamentFinal } from '../../models/slam-final';


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


  public getCaseBackgroundColor(character: string | undefined): string {
    if(!character) {
      return 'transparent';
    }

    if(character.includes('Federer')) {
      return 'greenyellow';
    } else if(character.includes('Nadal')) {
      return 'orange';
    } else if(character.includes('Djokovic')) {
      return 'red';
    } else if(character.includes('Murray')) {
      return 'deepskyblue';
    } else if(character.includes('Björn')) {
      return 'yellow';
    } else if(character.includes('Sampras')) {
      return 'cadetblue';
    } else if(character.includes('Agassi')) {
      return 'mediumpurple';
    } else if(character.includes('Lendl')) {
      return 'lightskyblue';
    } else if(character.includes('Connors')) {
      return 'antiquewhite';
    } else if(character.includes('McEnroe')) {
      return 'lightgray';
    }  else if(character.includes('Wilander')) {
      return 'pink';
    } else {
      return 'transparent';
    }
  }

  public getCaseColor(character: string | undefined): string {
    if(!character) {
      return 'black';
    }

    if(character.includes('Federer')) {
      return 'black';
    } else if(character.includes('Nadal')) {
      return 'black';
    } else if(character.includes('Djokovic')) {
      return 'black';
    } else if(character.includes('Murray')) {
      return 'black';
    } else {
      return 'black';
    }
  }
}
