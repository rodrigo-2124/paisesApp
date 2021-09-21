import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Pais} from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

pais!: Pais;  //indica que puede que no debe ser nulo y que se utilizara el valor 'pais' luego

  constructor(
    private rutaActual: ActivatedRoute,    //cambios en URL
    private _paisService: PaisService
  ) { }

  //DEBERIA CAPUTAR EL VALOR DE LA URL http://localhost:4200/pais/VA , pero por algun motivo no funciona, deberia dar con cualquier parte del codigo hecho en ngOnInit
  ngOnInit(): void {
    // this.rutaActual.params.subscribe(({id_pais})=>{
    //   console.log(id_pais);
    //   this._paisService.buscarPaisCodigo(id_pais).subscribe(pais=>{
    //     console.log(pais);
    //   });
    // });

    
    this.rutaActual.params
      .pipe(
        switchMap( ({id_pais})=>this._paisService.buscarPaisCodigo(id_pais) ), 
        tap(resp=>console.log(resp))
      )
      .subscribe(resp=>{
        console.log(resp);
    });
  }

}
