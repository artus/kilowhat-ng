import { TestBed, inject } from '@angular/core/testing';

import { KilowhatService } from './kilowhat.service';

describe('KilowhatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KilowhatService]
    });
  });

  it('should be created', inject([KilowhatService], (service: KilowhatService) => {
    expect(service).toBeTruthy();
  }));
});
