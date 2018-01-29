import { Injectable } from '@angular/core';
import { KiloWhat, MeterEvent } from 'kilowhat';

import { KilowhatStorage } from '../assets/persistence/persistence';

@Injectable()
export class KilowhatService {
    
  kilowhat : KiloWhat;
  storage : KilowhatStorage;

  constructor() { 
      this.storage = new KilowhatStorage();
      this.kilowhat = this.storage.load();
  }
    
  save()
  {
      this.storage.save(this.kilowhat);
  }

}
