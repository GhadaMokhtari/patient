import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ObservationComponent} from './observation/observation.component';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  private readonly url = 'http://fhir.eole-consulting.io/api/';


  constructor(private http: HttpClient) { }

  getPatient(): Promise<any> {
    return this.http.get(this.url + 'patient/123456789', {
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  getObservation(): Promise<any> {
    return this.http.get(this.url + 'observation?subject.reference=Patient/123456789', {
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

  getDiagnostic(): Promise<any> {
    return this.http.get(this.url + 'observation?subject.reference=Patient/123456789', {
    })
      .toPromise().then(response => response)
      .catch(this.handleError);
  }

   postObservation(observation: ObservationComponent): Promise<Response> {
    return this.http.post(this.url + '/observation', observation
    )
      .toPromise().then(response => response)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
