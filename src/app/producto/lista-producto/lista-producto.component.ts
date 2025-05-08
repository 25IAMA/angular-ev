import { Component, OnInit } from '@angular/core';
import { GetProductosService } from '../get-productos.service';
import { Observable } from 'rxjs';
import { Producto } from '../producto.modelo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-producto',
  imports: [CommonModule],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.scss',
  standalone: true
})
export class ListaProductoComponent implements OnInit {
  productos$: Observable<Producto[]> | undefined;
  
  constructor(private getProductosService: GetProductosService) { }
  
  ngOnInit() {
    this.productos$ = this.getProductosService.getData() 
  }

}
