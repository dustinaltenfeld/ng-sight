import { Component, OnInit } from '@angular/core';
import {Server} from '../../shared/server'

const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-web', isOnline: true},
  {id: 2, name: 'prod-web', isOnline: false}
];

@Component({
  selector: 'app-server-states',
  templateUrl: './server-states.component.html',
  styleUrls: ['./server-states.component.css']
})
export class ServerStatesComponent implements OnInit {

  constructor() { }
  servers: Server[] = SAMPLE_SERVERS;
  ngOnInit() {
  }

  
}
