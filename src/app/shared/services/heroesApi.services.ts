import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';


@Injectable({providedIn: 'root'})
export class HeroesApiService {
    constructor(private http: HttpClient) {}

    private apiUrl: string = 'https://akabab.github.io/superhero-api/api'

    getAllHeroes(): Observable<Hero[] | null> {
        return this.http.get<Hero[]>(`${this.apiUrl}/all.json`).pipe( 
            catchError( error => of(null)),
            );
    }

}