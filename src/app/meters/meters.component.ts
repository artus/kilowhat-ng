import { Component, OnInit } from '@angular/core';
import { KilowhatService } from '../kilowhat.service';

import { KiloWhat } from 'kilowhat';
import { Meter } from 'kilowhat';

@Component({
  selector: 'app-meters',
  templateUrl: './meters.component.html',
  styleUrls: ['./meters.component.css']
})
export class MetersComponent implements OnInit {
    
  constructor(private kilowhatService: KilowhatService) { }

  ngOnInit() {
  }
    
  kilowhat() : KiloWhat
  {
      return this.kilowhatService.kilowhat;
  }
    
  deleteMeter(meterId : number)
  {
      this.kilowhat().repo.removeMeter(meterId);
  }

}
