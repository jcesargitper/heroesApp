import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = "https://heroe-app-46813-default-rtdb.firebaseio.com";

  constructor( private http: HttpClient ) { }

  crearHeroe ( heroe: HeroeModel ) {

    return this.http.post(`${ this.url }/heroes.json`, heroe)
      .pipe( 
        map( (resp: any) => {
          heroe.id = resp.name;
          return heroe;
        })
      )
    
  }
}
