import {Injectable} from "@angular/core";
import { Videojuegos} from '../videojuegos/Videojuego';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ServicioVideojuego
{
    private _videojuegoUrl='localhost:777/api/videojuegos';
	constructor(private _http: HttpClient){}
	leerListado(): Observable<Videojuegos[]>
	{
		return this._http.get<Videojuegos[]>(this._videojuegoUrl);
		
	}
}