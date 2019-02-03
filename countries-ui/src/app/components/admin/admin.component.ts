import { Component, OnInit } from '@angular/core';
import { CountryService} from '../../services/country.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public countries;

  constructor(private countryService : CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(){
    this.countryService.getCountries().subscribe(
      data => { this.countries = data},
      err => console.error(err),
      () => console.log('countries loaded')
    );
  }
}
