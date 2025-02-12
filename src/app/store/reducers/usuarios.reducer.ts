import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usuariosReducer = createReducer(
  usuariosInitialState,
  on(actions.cargarUsuarios, (state) => ({ ...state, loading: true })),
  on(actions.cargarUsuariosSuccess, (state, {usuarios}) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios],
    })),

  on(actions.cargarUsuariosError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      //del error que nos devuelve el catchError de Rxjs nos quedaremos con lo que nos interese solo
      // en este caso url, name y message
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  })),
);

export function usuariosReducer(state, action) {
  return _usuariosReducer(state, action);
}
