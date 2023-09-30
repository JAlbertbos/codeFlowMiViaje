import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaysComponent } from './days/days.component';
import { DetailComponent } from './detail/detail.component';
import { PlayerComponent } from './player/player.component';
import { DayFilterPipe } from './day-filter.pipe';
import { CityFilterPipe } from './city-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    DetailComponent,
    PlayerComponent,
    DayFilterPipe,
    CityFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
