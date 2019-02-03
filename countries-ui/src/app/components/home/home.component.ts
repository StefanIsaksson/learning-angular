import { Component, OnInit } from '@angular/core';
import { CountryService} from '../../services/country.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  continents: string[] = [
    'Europe',
    'North America',
    'Africa',
    'Asia',
    'South America',
    'Oceania',
    'Antarctica'
  ]
  countryForm: FormGroup;
  validMessage: string = "";


  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryForm = new FormGroup({
      name : new FormControl('', Validators.required),
      code : new FormControl('', Validators.required),
      continent : new FormControl('', Validators.required),
      population : new FormControl('', Validators.required),
      contact: new FormControl
    });
  }

  submitCountry() {

    if (this.countryForm.valid) {
      this.validMessage = "The country registration has been submitted. Thank you!";
      this.countryService.createCountry(this.countryForm.value).subscribe(
        data => {
          this.countryForm.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}
