import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private weatherService : ApiService) {}
  title = 'weatherApp';
  weatherDetail : any;
  
  ngOnInit(): void {
    this.weatherService.getWeather('wellington')
    .pipe().subscribe({
      next: (response => {
        this.weatherDetail = response;
        console.log(response);
      })
    });

    // this.weatherService.getWeatherByFetch('wellington');
  }
}
