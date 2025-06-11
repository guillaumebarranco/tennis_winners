import { Component, input } from '@angular/core';
import { TournamentFinal } from '../models/slam-final';


@Component({
  selector: 'app-tournament',
  styleUrls: ['./tournament.component.scss'],
  templateUrl: './tournament.component.html',
})
export class TournamentComponent {
  public tournamentName = input.required<string>();
  public tournamentFinals = input.required<TournamentFinal[]>();
  public onlyFrom2000 = true;

  public getCaseBackgroundColor(character: string): string {
    if(character.includes('Federer')) {
      return 'greenyellow';
    } else if(character.includes('Nadal')) {
      return 'orange';
    } else if(character.includes('Djokovic')) {
      return 'red';
    } else if(character.includes('Murray')) {
      return 'deepskyblue';
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
