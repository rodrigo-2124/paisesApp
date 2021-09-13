import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl= 'https://restcountries.eu/rest/v2';

  constructor(
    private _http: HttpClient
  ) { }

  buscar(termino: string): Observable<Pais[]>{
    const url= `${this.apiUrl}/name/${termino}`;
    return this._http.get<Pais[]>(url);
  }
}
