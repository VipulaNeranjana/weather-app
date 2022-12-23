import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../models/weatherModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getWeather(location : string) : Observable<Weather>{
    return this.http.get<Weather>(environment.url + location+ '/today',{headers : new HttpHeaders()
      .set('X-RapidAPI-Host',environment.headers['X-RapidAPI-Host'])
      .set('X-RapidAPI-Key',environment.headers['X-RapidAPI-Key']),
      params : new HttpParams()
      .set('unitGroup', 'metric')
    })
  }

  // options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'b15905d8a4msh8f1cc0a31f0f9b2p1344d0jsnbb6eb3bb1871',
  //     'X-RapidAPI-Host': 'bestweather.p.rapidapi.com'
  //   }
  // };
  
  // geti(location : string) {
  //   fetch('https://bestweather.p.rapidapi.com/weather/'+location+'/today?unitGroup=metric', this.options)
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
  // }
}
