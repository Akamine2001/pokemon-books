import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
