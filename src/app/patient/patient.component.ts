import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
patient: any;
medecin: any;
birthDay: string;

  ngOnInit(): void {
  }

  constructor(private service: RestService) {
    service.getPatient().then(patient => this.patient = patient);
    service.getMedecin().then((medecin => this.medecin = medecin));
  }
}
