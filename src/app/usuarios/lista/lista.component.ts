import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export default class ListaComponent implements OnInit {

  public usuarios: Usuario[] = [];
  private usuarioService = inject(UsuarioService);

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe((users) => {
      console.log(users);

      this.usuarios = users;
    });
  }

}
