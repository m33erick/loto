import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tirages } from '../models/tirages';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
   getTirages(): Observable<Tirages> {
   return this.http.get('https://data.opendatasoft.com/api/records/1.0/search/?'
   + 'dataset=resultats-loto%40jdelbourgo&q=annee_numero_de_tirage%3E%3D+2019&rows=1000&sort=date_de_tirage')
   .pipe(
    map(response => (response as Tirages))
    );
  }

  firstClick() {
    return console.log('clicked');
  }
}
