import { Component } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent {
// ṭo store movie details
movieDetails:any
movieName:any   //for input

// here, injected service file and mService as refernce
constructor(private mService: MovieService){}
  // here too we get an asynchronous data,
  // so we use subscribe 
searchMovie(movieName: string) {
  this.mService.getMovieDetails(movieName).subscribe((data) => {
    this.movieDetails = data;
  });
}

}
