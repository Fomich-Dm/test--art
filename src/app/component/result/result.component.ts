import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../service/data.service";
import {combineLatestWith, map, Observable, retry, switchMap, tap} from "rxjs";
import {Film} from "../../models/film";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit{
  films$: Observable<Film[]>;
  filter$: Observable<any>;
  filteredFilm$: Observable<Film[]>;


  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  getFilms(): void{
    this.films$ = this.dataService.getFilms()//.subscribe(r => console.log(r));
    this.filter$ = this.route.params//.subscribe(r => console.log(r));
    this.filteredFilm$ = this.films$.pipe(combineLatestWith(this.filter$),
      map(([films, filter]) => this.filterFilms(films, filter)
      ));

  }

  ngOnInit() {
    this.getFilms();
  }

  filterFilms(films: Film[], filter: any): Film[]{
    if(filter) {
      return films.filter(p => p.title.toLowerCase().includes(filter.name.toLocaleLowerCase()) &&
        p.year.toLowerCase().includes(filter.year.toLowerCase()));
    }
    return films
  }



}

