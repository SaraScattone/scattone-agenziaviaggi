import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LocalitaComponent } from './localita/localita.components';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LocalitaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
