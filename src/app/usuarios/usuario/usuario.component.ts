import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import * as actions from '../../store/actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsuarioComponent implements OnInit {

  public usuario: Usuario;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ){}

  ngOnInit(): void {

    this.store.select('usuario').subscribe(({ user, loading, error }) => {
      this.usuario = user;
    });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(actions.cargarUsuario({ id }));
    });

  }
}
