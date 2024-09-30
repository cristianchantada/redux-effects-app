import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from "../actions/usuarios.actions";
import { mergeMap, tap } from "rxjs";
import { UsuarioService } from "../../services/usuario.service";

@Injectable()
export class UsuariosEffects {



  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ){}

  // El efecto necesita un callback que devuelve un Observable
  public cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      // El observable estará pendiente de todas las acciones del store
      // pero no queremos esto, sino que lo pasamos por el pipe para que
      // solo esté pendiente de las que necesitamos, para ello usamos el ofType (cualquier otra ya no pasará del ofType)
      ofType(usuariosActions.cargarUsuarios),
      tap( data => console.log('effect tap', data), // tap es útil aquí para ver lo que fluye de data después del ofType

      // Ahora queremos disparar un nuevo Observable que será el encargado de pedir la información y con mergeMap lo disparamos y podemos unir ambos
      mergeMap(
        // recibe un callback que es el observable que queremos disparar (al servicio para que haga la petición)
        () => this.usuarioService.getUsers().pipe( // Pipe y tap solo para ver la data que fluye
          tap( data => console.log('getUsers effet', data),
          )
        ),

        // Ahora es necesario disparar una acción
      )

      )
    )
  )

}