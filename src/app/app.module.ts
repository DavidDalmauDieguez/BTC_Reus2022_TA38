import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';

import  { HttpClientModule } from '@angular/common/http';
import { InfoPersonajesComponent } from './info-personajes/info-personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    InfoPersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
