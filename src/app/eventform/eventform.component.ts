import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { KilowhatService } from '../kilowhat.service';

import { KiloWhat, Meter, MeterEvent } from 'kilowhat';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {
    
  newMeterEvent : MeterEvent;
  meterId : number;

  constructor(private kilowhatService : KilowhatService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
      this.newMeterEvent = new MeterEvent();
      this.meterId = +this.route.snapshot.paramMap.get('meterId');
  }
    
  addMeterEvent()
  {
      this.kilowhatService.kilowhat.repo.addMeterEvent(this.meterId, this.newMeterEvent);
      this.router.navigate(["/events"]);
  }

}
