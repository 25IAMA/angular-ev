import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto.modelo';
@Injectable({
  providedIn: 'root'
})
export class GetProductosService {

  private productoUrl = '/api/productos'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productoUrl);
  }
}
