import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';
import { GamesDataService } from '../shared/services/games-data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  games: Game[] = []

  ngOnInit(): void {
  }

  goToPrevious(): void {
    console.log('Previous button clicked');
  }

  goToNext(): void {
    console.log('Next button clicked');
  }

}
