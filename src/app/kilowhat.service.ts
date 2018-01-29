import { Injectable } from '@angular/core';
import { KiloWhat } from 'kilowhat';

@Injectable()
export class KilowhatService {
    
  kilowhat : KiloWhat;

  constructor() { 
      this.kilowhat = new KiloWhat();
  }

}
