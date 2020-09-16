import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-observation-patient',
  templateUrl: './observation-patient.component.html',
  styleUrls: ['./observation-patient.component.css']
})
export class ObservationPatientComponent implements OnInit {
  obs: any;

  constructor(private service: RestService) {
    service.observationDuPatient().then(obs => this.obs = obs);
    console.log(this.obs);
  }


  ngOnInit() {
  }


}
