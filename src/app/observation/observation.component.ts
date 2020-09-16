import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
  obs: any;
service: any;


  constructor(private service1: RestService) {
    this.service = service1;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const ob = {

      resourceType: 'Observation',
      status: 'registered',
      code: {
        text: form.value.motif
      },
      subject: {
        reference: 'Patient/123456789'
      },
      performer: [
        {
          reference: 'Practitioner/5f5f8cbe3ef92800151f13a9'
        }
      ],
      valueString: form.value.description
    };
    console.log(ob);
    this.service.postObservation(ob).then(data => {console.log(data);});




  }
}
