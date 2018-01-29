import { Component, OnInit } from '@angular/core';
import { KilowhatService } from '../kilowhat.service';

import { KiloWhat, Meter, MeterEvent } from 'kilowhat';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private kilowhatService : KilowhatService) { }

  ngOnInit() {
  }
    
  kilowhat() : KiloWhat
  {
      return this.kilowhatService.kilowhat;
  }
    
  removeEvent(meterId : number, eventId : number)
  {
      this.kilowhat().repo.removeMeterEvent(meterId, eventId);
  }

}
