import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Game } from '../models/game';

@Injectable({ providedIn: 'root' })
export class GamesDataService {

  constructor(private http: HttpClient) { }

  fetchGames(pageIndex: number, pageSize: number) {
    this.http.get<Game[]>(
      'https://localhost:44320/api/game/1/6'
    ).subscribe(games => {
      console.log(games);
    });
  }
}