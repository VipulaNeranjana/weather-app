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
  
  ngOnInit(): void {
    this.weatherService.getWeather('wellington')
    .pipe().subscribe({
      next: (response => {
        console.log(response);
      })
    });

    // this.weatherService.geti('wellington');
  }
}
