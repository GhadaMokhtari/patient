import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ObservationComponent} from './observation/observation.component';
@Injectable({
  providedIn: 'root'
})
export class RestService {
 private readonly url = 'https://fhir.eole-consulting.io/api/';



  constructor(private http: HttpClient) { }

  postObservation(observation: any): Promise<Response> {
    return this.http.post(this.url + 'observation', observation, {
      headers : {'Content-Type': 'application/json'}
      }
    )
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  postRdv(rdv: any): Promise<Response> {
    return this.http.post(this.url + 'appointment', rdv, {
        headers : {'Content-Type': 'application/json'}
      }
    )
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  getPatient(): Promise<any> {
    return this.http.get(this.url + 'patient/123456789', {
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  getObservation(): Promise<any> {
    return this.http.get(this.url + 'observation?subject.reference=Patient/123456789')
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  getDiagnostic(): Promise<any> {
    return this.http.get(this.url + 'diagnostic-report?subject.reference=Patient/123456789', {
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  getMedecin(): Promise<any> {
    return this.http.get(this.url + 'practitioner/5f5f8cbe3ef92800151f13a9', {
    }).toPromise().then(response => response)
      .catch(this.handleError);
  }

  getAppointment(): Promise<any> {
    return this.http.get(this.url + 'appointment?participant.actor.reference=Patient/123456789', {
    }).toPromise().then(response => response)
      .catch(this.handleError);
  }




  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
