import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ObservationComponent} from "./observation/observation.component";
import {PagePrincipaleComponent} from "./page-principale/page-principale.component";
import {DiagnosticComponent} from "./diagnostic/diagnostic.component";
import {PatientComponent} from "./patient/patient.component";

const routes: Routes = [
  {path :'page-principale', component:PagePrincipaleComponent},
  { path: 'observation', component: ObservationComponent },
  {path: 'diagnostic', component: DiagnosticComponent},
  {path: 'patient', component: PatientComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
