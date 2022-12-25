import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherFreeApi } from './models/weatherModel';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  location = 'wellington';
  constructor(private weatherService : ApiService) {}
  title = 'weatherApp';
  weatherDetail : any ;
  subscribtion1 : Subscription | undefined;
  subscribtion2 : Subscription | undefined;
  
  ngOnInit(): void {
    // this.weatherService.getWeather('wellington')
    // .pipe().subscribe({
    //   next: (response => {
    //     this.weatherDetail = response;
    //     console.log(response);
    //   })
    // });

    this.subscribtion1 = this.weatherService.getWeatherFromFreeApi(this.location)
    .pipe().subscribe({
      next: (response => {
        this.weatherDetail = response;
        console.log(response);
      })
    });

    // this.weatherService.getWeatherByFetch('wellington');
  }

  ngOnDestroy() {
    this.subscribtion1?.unsubscribe();
    this.subscribtion2?.unsubscribe();
  }

  logCountry(country : any) {
    this.location = country;
    console.log(country);

    this.subscribtion2 = this.weatherService.getWeatherFromFreeApi(country)
    .pipe().subscribe(
      response => {
        this.weatherDetail = response;
        console.log(response);
      },
      error => {
        alert('location is incorrect');
      }
      )
    ;
  }
}
