import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
    mat-card{
      margin-top:20px
    }
    `
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() heroe!:Heroe;

}
