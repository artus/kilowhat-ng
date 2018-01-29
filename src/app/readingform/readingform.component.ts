import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { KilowhatService } from '../kilowhat.service';

import { Meter, Reading, Dial } from 'kilowhat';

@Component({
  selector: 'app-readingform',
  templateUrl: './readingform.component.html',
  styleUrls: ['./readingform.component.css']
})
export class ReadingformComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private kilowhatService : KilowhatService,
              private location: Location) { }
    
  meterId : number;
  dialId : number;
  newReading : Reading;

  ngOnInit() {
      this.meterId = +this.route.snapshot.paramMap.get('meterId');
      this.dialId = +this.route.snapshot.paramMap.get('dialId');
      
      this.newReading = new Reading();
  }
    
  addReading()
  {
      this.kilowhatService.kilowhat.repo.addReading(this.meterId, this.dialId, this.newReading);
      this.kilowhatService.save();
      
      this.router.navigate(["/meters"]);
  }
}
