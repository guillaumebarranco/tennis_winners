import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WinnersComponent } from './winners/winners.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, WinnersComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
})
export class AppModule {}
