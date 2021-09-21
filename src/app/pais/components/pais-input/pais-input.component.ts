import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  implements OnInit{

  @Input() placeholder_input: string= '';
  @Output() onEnter: EventEmitter<string>= new EventEmitter();  //'on' normalmente señala eventos
  @Output() onDebounce: EventEmitter<string>= new EventEmitter();

  debouncer: Subject<string>= new Subject();   //es un Observable especial
  termino: string= '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))    //una especie de delay para el Observable
    .subscribe(valor=>{
      this.onDebounce.emit(valor);
      console.log('debouncer: ', valor);
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }
  
  teclaPresionada(event: any){
    this.debouncer.next(this.termino);
  }


}
