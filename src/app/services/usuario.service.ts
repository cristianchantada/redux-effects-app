import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private url = 'https://reqres.in/api';
  private http: HttpClient = inject(HttpClient);

  getUsers() {
    return this.http.get(`${this.url}/users`).pipe(
      map( resp => {return resp['data']})
    );
  }

}
