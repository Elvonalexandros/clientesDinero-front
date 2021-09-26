import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  pacientes: Paciente[] = [];
  ngOnInit(): void {

  this.pacientes = [
    {
      id: 0,
      nombre: 'Tania',
      apellido1: 'Rodriguez',
      apellido2: 'Arias',
      aseguradora: 'Adeslas',
      visitaNumero: 1,
      fechaAtencion: '17-12-92'
    },
    {
      id: 1,
      nombre: 'Alejandro',
      apellido1: 'Jimenez',
      apellido2: 'Doblado',
      aseguradora: 'Adeslas',
      visitaNumero: 1,
      fechaAtencion: '17-12-92'
    }
  ]
}
  }

