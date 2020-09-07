import { Component, OnInit } from '@angular/core';
import { Game } from '../shared/models/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  games: Game[] = [
    {
      visitor: { fullName: 'Los Angeles Lakers' },
      home: { fullName: 'Boston Celtics' },
      score: '99 - 107',
      status: 'Finished',
      started: new Date("2015-03-25T12:00:00Z"),
      finished: new Date("2015-03-25T12:00:00Z"),
    },
    {
      visitor: { fullName: 'Los Angeles Lakers' },
      home: { fullName: 'Boston Celtics' },
      score: '99 - 107',
      status: 'Finished',
      started: new Date("2015-03-25T12:00:00Z"),
      finished: new Date("2015-03-25T12:00:00Z"),
    },
    {
      visitor: { fullName: 'Los Angeles Lakers' },
      home: { fullName: 'Boston Celtics' },
      score: '99 - 107',
      status: 'Finished',
      started: new Date("2015-03-25T12:00:00Z"),
      finished: new Date("2015-03-25T12:00:00Z"),
    },
    {
      visitor: { fullName: 'Los Angeles Lakers' },
      home: { fullName: 'Boston Celtics' },
      score: '99 - 107',
      status: 'Finished',
      started: new Date("2015-03-25T12:00:00Z"),
      finished: new Date("2015-03-25T12:00:00Z"),
    },
    {
      visitor: { fullName: 'Los Angeles Lakers' },
      home: { fullName: 'Boston Celtics' },
      score: '99 - 107',
      status: 'Finished',
      started: new Date("2015-03-25T12:00:00Z"),
      finished: new Date("2015-03-25T12:00:00Z"),
    },
    {
      visitor: { fullName: 'Los Angeles Lakers' },
      home: { fullName: 'Boston Celtics' },
      score: '99 - 107',
      status: 'Finished',
      started: new Date("2015-03-25T12:00:00Z"),
      finished: new Date("2015-03-25T12:00:00Z"),
    },
    {
      visitor: { fullName: 'Los Angeles Lakers' },
      home: { fullName: 'Boston Celtics' },
      score: '99 - 107',
      status: 'Finished',
      started: new Date("2015-03-25T12:00:00Z"),
      finished: new Date("2015-03-25T12:00:00Z"),
    },
    {
      visitor: { fullName: 'Los Angeles Lakers' },
      home: { fullName: 'Boston Celtics' },
      score: '99 - 107',
      status: 'Finished',
      started: new Date("2015-03-25T12:00:00Z"),
      finished: new Date("2015-03-25T12:00:00Z"),
    }
  ]

  ngOnInit(): void {
  }

  goToPrevious(): void {
    console.log('Previous button clicked');
  }

  goToNext(): void {
    console.log('Next button clicked');
  }

}
