import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ObservationComponent } from './observation/observation.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservationComponent,
    DiagnosticComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
