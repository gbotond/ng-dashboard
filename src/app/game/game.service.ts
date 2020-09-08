import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Game } from '../shared/models/game';

@Injectable()
export class GameService {
    gamesChanged = new Subject<Game[]>();

    private games: Game[] = [];

    constructor() { }

    getGames() {
        return this.games.slice();
    }

}