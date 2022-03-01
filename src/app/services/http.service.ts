import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Haccept': 'text/plain',
        'ApiKey': 'B180E86E-5D1A-4403-ABE0-A4030CAC2B5E'
      }
    )
  };

  constructor(
    private http: HttpClient
  ) { }

  get(url) {
    return this.http.get(url, {headers: this.httpOptions.headers});
  }
}
