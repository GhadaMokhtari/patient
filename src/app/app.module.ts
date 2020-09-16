import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ObservationComponent } from './observation/observation.component';

import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { PatientComponent } from './patient/patient.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import {FormsModule} from '@angular/forms';
import {ObservationPatientComponent} from './observation-patient/observation-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservationComponent,
    DiagnosticComponent,
    ObservationPatientComponent,
    PatientComponent,
    PagePrincipaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
