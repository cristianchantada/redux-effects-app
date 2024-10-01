import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  // El efecto necesita un callback que devuelve un Observable

  //! Hacer Snippet con este efecto que no recibe argumento

  public cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      // El observable estará pendiente de todas las acciones del store
      // pero no queremos esto, sino que lo pasamos por el pipe para que
      // solo esté pendiente de las que necesitamos, para ello usamos el ofType (cualquier otra ya no pasará del ofType)
      ofType(usuariosActions.cargarUsuarios),
      tap((data) => console.log('effect tap', data)), // tap es útil aquí para ver lo que fluye de data después del ofType
      // Ahora queremos disparar un nuevo Observable que será el encargado de pedir la información y con mergeMap lo disparamos y podemos unir ambos
      mergeMap(
        // recibe un callback que es el observable que queremos disparar (al servicio para que haga la petición)
        // Aquí, de tener argumentos en la acción enviada, es donde se obtiene la acción
        (action) =>
          this.usuarioService.getUsers().pipe(
            // Pipe y tap solo para ver la data que fluye
            tap((data) => console.log('getUsers effet', data)),
            // Ahora es necesario disparar la acción para cargar el estado con los usurios
            //? despachamos la acción de todo h aido bien
            map((users) =>
              usuariosActions.cargarUsuariosSuccess({ usuarios: users })
            ),
            // Se deben manejar los errores y mejor que en el servicio, ngrx recomienda que se haga en el efecto
            // en el err cathError disparamos la acción de error contra el estado.
            // Debemos devolver un Observable, por lo que utilizamos el of() de rxjs
            // para envolver la acción
            //! Despachamos la acción de que algo ha ido mal
            catchError((err) =>
              of(usuariosActions.cargarUsuariosError({ payload: err }))
            )
          )
      )
    )
  );
}
