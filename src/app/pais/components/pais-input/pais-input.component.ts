import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  {

  @Output() onEnter: EventEmitter<string>= new EventEmitter();  //'on' normalmente señala eventos
  termino: string= '';

  constructor() { }

  buscar(){
    this.onEnter.emit(this.termino);
  }

}
