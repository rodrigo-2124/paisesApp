import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: []
})
export class PaisTableComponent implements OnInit {

  constructor() { }

  @Input() paises: Pais[]= [];

  ngOnInit(): void {
  }

}
