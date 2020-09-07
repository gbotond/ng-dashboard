import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SalesDataService {

    constructor(private _http: HttpClient) { }

    getGames(pageIndex: number, pageSize: number) {

    }

    getGamesByTeam(n: number) {

    }

    getgamesByState() {

    }
}