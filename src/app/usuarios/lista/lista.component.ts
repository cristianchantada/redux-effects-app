import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions';

@Component({
  selector: 'lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export default class ListaComponent implements OnInit {

  public usuarios: Usuario[] = [];
  // private usuarioService = inject(UsuarioService);

  constructor(
    private store: Store<AppState>
  ){}

  ngOnInit(): void {

    // Con los effects de ngrx 
    this.store.dispatch(cargarUsuarios());

    // this.usuarioService.getUsers().subscribe((users) => {
    //   console.log(users);
    //   this.usuarios = users;
    // });
  }

}
