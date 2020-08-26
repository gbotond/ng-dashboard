import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      labels: ['Rebounds', 'Assists', 'Points', 'Blocks', 'Steals', 'Bench Points'],
      datasets: [
        {
          label: 'Team A',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 56, 55, 75]
        },
        {
          label: 'Team B',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 86, 27, 80]
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
