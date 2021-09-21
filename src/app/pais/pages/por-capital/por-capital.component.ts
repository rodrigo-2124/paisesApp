import { Component } from '@angular/core';

import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

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
    this._paisService.buscarCapital(this.termino).subscribe(resp=>{
      this.paises= resp;
      console.log(resp);
    }, (err)=>{
      this.hayError= true;
      this.paises= [];
      console.log(err);
    });
  }
 


}
