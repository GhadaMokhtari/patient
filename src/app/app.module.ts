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
import {AlertModule} from 'ngx-bootstrap/alert';
import {ObservationPatientComponent} from './observation-patient/observation-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservationComponent,
    ObservationPatientComponent,
    DiagnosticComponent,
    PatientComponent,
    PagePrincipaleComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
