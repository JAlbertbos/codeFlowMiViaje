import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DaysComponent } from './days/days.component';
import { DetailComponent } from './detail/detail.component';
import { PlayerComponent } from './player/player.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DaysComponent,
    DetailComponent,
    PlayerComponent,
    SearchFilterPipe,
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
