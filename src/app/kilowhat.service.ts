import { Injectable } from '@angular/core';
import { KiloWhat, MeterEvent } from 'kilowhat';

@Injectable()
export class KilowhatService {
    
  kilowhat : KiloWhat;

  constructor() { 
      this.kilowhat = new KiloWhat();
      
      let newMeter = this.kilowhat.addNewSingleMeter();
      let secondMeter = this.kilowhat.addNewDualMeter();
      
      this.kilowhat.repo.addMeterEvent(newMeter.id, new MeterEvent());
      this.kilowhat.repo.addMeterEvent(newMeter.id, new MeterEvent());
      this.kilowhat.repo.addMeterEvent(secondMeter.id, new MeterEvent());
  }

}
