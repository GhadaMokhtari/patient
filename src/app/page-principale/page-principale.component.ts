import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-page-principale',
  templateUrl: './page-principale.component.html',
  styleUrls: ['./page-principale.component.css']
})
export class PagePrincipaleComponent implements OnInit {
  title = 'patientProject';
  patient: any;
  constructor(private service: RestService) {
    service.getPatient().then(patient => this.patient = patient);
    console.log(this.patient);


  }

  ngOnInit() {
  }

}
