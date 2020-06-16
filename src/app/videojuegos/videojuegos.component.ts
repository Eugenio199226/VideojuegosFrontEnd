import { Component, OnInit } from '@angular/core';
import { Videojuegos} from '../videojuegos/Videojuego';
import {ServicioVideojuego} from './videojuegos.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css'],
  providers:[ServicioVideojuego]
})
export class VideojuegosComponent implements OnInit {

  videojuegosRecibidos: Videojuegos[];

  constructor(private _servicioVideojuegos:ServicioVideojuego) { }

  ngOnInit(): void {
  }
  onSelect(): void 
  {
    this._servicioVideojuegos.leerListado().subscribe
    (
      videojuegosListado=>{
        this.videojuegosRecibidos=videojuegosListado;
      }
    ),error=>
    {
		return Observable.throw(error.json() ||"error del servidor");
    };
  }
}
