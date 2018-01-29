import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { KilowhatService } from './kilowhat.service';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { MetersComponent } from './meters/meters.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { MeterformComponent } from './meterform/meterform.component';
import { ReadingformComponent } from './readingform/readingform.component';
import { EventformComponent } from './eventform/eventform.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    MetersComponent,
    AboutComponent,
    EventsComponent,
    MeterformComponent,
    ReadingformComponent,
    EventformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ KilowhatService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
