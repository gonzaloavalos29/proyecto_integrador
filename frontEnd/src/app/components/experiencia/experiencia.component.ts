import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajo1:string = "Operador técnico de radio";
  trabajo1Inicio:number = 2013;
  trabajo1Fin:string = "Actualidad";
  lugarTrabajo1:string = "Radio Stylo FM 107.7";
  trabajo1Descripcion:string = "Regulacion y manejo de audio y video de consolas, computadoras (redes sociales y musicalización) y micrófonos."

  trabajo2:string = "Cajero y vendedor";
  trabajo2Inicio:number = 2018;
  trabajo2Fin:string = "Actualidad";
  lugarTrabajo2:string = "Centro Cultural 'José Asunción Flores'"
  trabajo2Descripcion:string = "Trabajo en nombre del Centro Cultural 'José Asunción Flores' (Quilmes, Ezpeleta Oeste) en distintas localidades del conurbano bonaerense como armador de stand, cajero y vendedor de comida en ferias de colectividades."

  trabajo3:string = "Personal Trainer";
  trabajo3Inicio:number = 2022;
  trabajo3Fin:string = "Actualidad";
  lugarTrabajo3:string = "Centro de Entrenamiento Integrado Stylo (Quilmes)"
  trabajo3Descripcion:string = "Doy clases de entrenamiento personal en un centro de entrenamiento integrado (CEIS) ubicado en Quilmes, capacitándome continuamente por un profesor de educación física a cargo. Ayudo en técnicas, ejercicios y posturas de calentamientos, entrenamientos y elongación."

  constructor() { }

  ngOnInit(): void {
  }

}
