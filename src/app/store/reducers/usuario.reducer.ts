import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
  id: String
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const usuarioInitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _usuarioReducer = createReducer(
  usuarioInitialState,

  on(actions.cargarUsuario, (state, {id}) => ({
    ...state,
    loading: true,
    id: id,
  })),

  on(actions.cargarUsuarioSuccess, (state, {usuario}) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...usuario},
    })),

  on(actions.cargarUsuarioError, (state, {payload}) => ({
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

export function usuarioReducer(state, action) {
  return _usuarioReducer(state, action);
}
