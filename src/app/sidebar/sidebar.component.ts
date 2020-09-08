import { Component, OnInit } from '@angular/core';
import { GamesDataService } from '../shared/services/games-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gameDataService: GamesDataService) { }

  ngOnInit(): void {
  }

  onFetchGames() {
    this.gameDataService.fetchGames(1, 5);
  }

}
