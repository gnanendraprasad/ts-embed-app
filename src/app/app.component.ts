import { Component, OnInit } from '@angular/core';
import { ThoughtspotService } from './thoughtspot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private ts: ThoughtspotService) {}

  ngOnInit(): void {
    this.ts.embedViz('#viz', {
      liveboardId: 'ca34dc1c-8a8d-4cb7-bb29-5c50d3d67bd1',
      vizId: '5c627138-64d6-4087-9fb2-63576962a798'
    });
  }
}
