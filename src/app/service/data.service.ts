import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Film} from "../models/film";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private filmsUrl = 'https://imdb-api.com/en/API/Top250Movies';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<any>(this.filmsUrl).pipe(map((response: any) => response.items));
  }

}
