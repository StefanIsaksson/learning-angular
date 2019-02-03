import { Component, OnInit } from '@angular/core';
import { CountryService} from '../../services/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  public country;

  constructor(private countryService: CountryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCountry(this.route.snapshot.params.id);
  }

  getCountry(id:number) {
    this.countryService.getCountry(id).subscribe(
      data => {
        this.country = data;
      },
      err => console.error(err),
      () => console.log('country loaded')
    );
  }

}
