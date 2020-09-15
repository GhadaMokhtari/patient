import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
