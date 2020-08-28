import { Component, OnInit } from '@angular/core';
import { Server } from '../shared/models/server';

const SAMPLE_SERVERS = [
  { id: 1, name: 'dev-web', isOnline: true },
  { id: 2, name: 'dev-login', isOnline: false },
  { id: 3, name: 'prod-web', isOnline: true },
  { id: 4, name: 'prod-login', isOnline: true }
]

@Component({
  selector: 'app-system-health',
  templateUrl: './system-health.component.html',
  styleUrls: ['./system-health.component.css']
})
export class SystemHealthComponent implements OnInit {

  constructor() { }

  server: Server[] = SAMPLE_SERVERS;

  ngOnInit(): void {
  }

}
