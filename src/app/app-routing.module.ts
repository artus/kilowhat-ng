import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MetersComponent } from './meters/meters.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { MeterformComponent } from './meterform/meterform.component';
import { ReadingformComponent } from './readingform/readingform.component';
import { EventformComponent } from './eventform/eventform.component';

const routes: Routes = [
    { path: 'meters', component: MetersComponent },
    { path: 'events', component: EventsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'meterform', component: MeterformComponent },
    { path: 'readingform/:meterId/:dialId', component: ReadingformComponent },
    { path: 'eventform/:meterId', component: EventformComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { 
   
}
