import { Component, input } from '@angular/core';
import { TournamentFinal } from '../../models/slam-final';


@Component({
  selector: 'app-tournament',
  styleUrls: ['./tournament.component.scss'],
  templateUrl: './tournament.component.html',
})
export class TournamentComponent {
  public tournamentName = input.required<string>();
  public tournamentFinals = input.required<TournamentFinal[]>();
  public onlyFrom2000 = input<boolean>(true);

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

  public getCaseColor(character: string): string {
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
