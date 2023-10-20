import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = 'fa1c9c03';
  apiUrl = 'https://www.omdbapi.com';

// use dependency injection;
// here, weinject HttpClient service & using ms as variable
  constructor(private ms:HttpClient) { }
  // to fetch movie details from site
  // here,we  make a get req to the site api.
  // here, we get a asynchronous data,
  // so we use subscribe to get data.
  getMovieDetails(movieName: string) {
    return this.ms.get(`${this.apiUrl}/?apikey=${this.apiKey}&t=${movieName}`);
  }


}
