import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KilowhatService } from '../kilowhat.service';

import { Meter } from 'kilowhat';


@Component({
  selector: 'app-meterform',
  templateUrl: './meterform.component.html',
  styleUrls: ['./meterform.component.css']
})
export class MeterformComponent implements OnInit {
    
  newMeter : Meter;
  dials : string = "1";

  constructor(private kilowhatService : KilowhatService, private router : Router) { }

  ngOnInit() {
      this.newMeter = new Meter();
  }
    
  addMeter()
  {
      let tempMeter;
      
      if (this.dials === "1")
      {
          tempMeter = this.kilowhatService.kilowhat.addNewSingleMeter();
      }
      
      tempMeter.description = this.newMeter.description;
      tempMeter.number = this.newMeter.number;
      
      this.router.navigate(["/meters"]);
  }

}
