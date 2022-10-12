import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudio1:string = 'Ingeniería Informática';
  estudio1Comienzo:number = 2020;
  estudio1Fin:string = "En curso";
  lugarEstudio1:string = "Universidad de Buenos Aires";

  estudio2:string = "Inglés"
  estudio2Comienzo:number = 2021;
  estudio2Fin:string = "En curso";
  lugarEstudio2 = "Liceo Británico de Quilmes";

  estudio3:string = "FullStack Developer Jr.";
  estudio3Comienzo:number = 2020;
  estudio3Fin:string = "En curso";
  lugarEstudio3:string = "CESSI / INTI / Ministerio de Desarrollo Productivo";

  constructor() { }

  ngOnInit(): void {
  }

}
