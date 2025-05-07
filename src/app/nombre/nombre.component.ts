import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nombre',
  imports: [CommonModule, FormsModule],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.scss',
  standalone: true
})
export class NombreComponent {
  nombre = '';
}
