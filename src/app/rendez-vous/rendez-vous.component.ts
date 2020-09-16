import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RestService} from '../rest.service';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
service: any;
  constructor(private service1: RestService) {
    this.service = service1;
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    var d1 = new Date(form.value.daterdv);
    var d2 = d1.setMinutes( d1.getMinutes() + 30 );

   const rdv =  {


     "resourceType": "Appointment",
     "status": "proposed",
     "specialty": [
       {
         "coding": [
           {
             "system": "http://snomed.info/sct",
             "code": "394814009",
             "display": "General practice"
           }
         ]
       }
     ],
     "start": d1.toString(),
     "end": d2.toString(),
     "comment": form.value.motif,
     "participant": [
       {
         "actor": {
           "reference": "Patient/123456789"
         }

       },
       {
         "actor": {
           "reference": "Practitioner/5f5f8cbe3ef92800151f13a9"
         }
       }
     ]
   };
    console.log(rdv);
   this.service.postRdv(rdv).then(data => {console.log(data); });

// let test= form.value.daterdv + 4;
// console.log(form.value.motif);
// console.log(form.value.daterdv);
// console.log(test);
  }

}
