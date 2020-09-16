import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-diagnostic',
  templateUrl: './diagnostic.component.html',
  styleUrls: ['./diagnostic.component.css']
})
export class DiagnosticComponent implements OnInit {
diag: any;
  constructor(private service: RestService) {
    service.getDiagnostic().then(diag => this.diag = diag);
    console.log(this.diag);
  }

  ngOnInit() {
  }

}
