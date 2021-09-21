import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  placeholder_input: string= 'Por Capital';
  termino: string= '';
  hayError: boolean= false;
  paises: Pais[]= [];

  constructor(
    private _paisService: PaisService
  ) { }

  buscar(event: string){
    this.hayError= false;
    this.termino= event;
    console.log(this.termino);
    this._paisService.buscarPais(this.termino).subscribe(resp=>{
      this.paises= resp;
      console.log(resp);
    }, (err)=>{
      this.hayError= true;
      this.paises= [];
      console.log(err);
    });
  }
 
  sugerencias(event: string){
    this.hayError= false;
  }
}
