import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { AppComponent } from './app.component';
import { ObservationComponent } from './observation/observation.component';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';
import { PatientComponent } from './patient/patient.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { PagePrincipaleComponent } from './page-principale/page-principale.component';
import {FormsModule} from '@angular/forms';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import {ObservationPatientComponent} from './observation-patient/observation-patient.component';
import {ToasterModule} from "angular2-toaster";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ObservationComponent,
    ObservationPatientComponent,
    DiagnosticComponent,
    PatientComponent,
    PagePrincipaleComponent,
    RendezVousComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToasterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
