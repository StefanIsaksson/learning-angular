import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  getCountries() {
    let countries = this.http.get('/server/api/v1/country');
    return countries;
  }
}
