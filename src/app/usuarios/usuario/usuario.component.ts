import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'usuario',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './usuario.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsuarioComponent { }
