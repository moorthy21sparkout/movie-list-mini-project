import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {

  type = '';
  id = '';
  url = '';
  movies : any;
  movie: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    alert(345);
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];

    if (this.type === 'trending') {
      alert(1);
      this.url = '/assets/data/trending-movies.json';
    }
    if (this.type === 'theatre') {
      alert(2);
      this.url = '/assets/data/theatre-movies.json';
    }
    if (this.type === 'popular') {
      alert(3);
      this.url = '/assets/data/popular-movies.json';
    }
    this.getMovie();
  }

  getMovie() {
    alert(4);
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie:{id:string}) => movie.id = this.id
      );
      if(index > -1){
        alert(5);
        this.movie = this.movies[index];
      }
    })

  }

}
