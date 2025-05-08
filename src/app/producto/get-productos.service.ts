import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Producto, ProductoAPI } from './producto.modelo';
import { Config } from '../app.config'; 

@Injectable({
  providedIn: 'root',
})
export class GetProductosService {

  private productoUrl = `${Config.apiUrl}/api/productos`
  
  constructor(private http: HttpClient) { }

  getData(): Observable<Producto[]> {
  
    return this.http.get<ProductoAPI[]>(this.productoUrl).pipe(
      map(res => {
        // Transformar la respuesta a un array de Producto
          return res.map(
            item=> ({
              nombre: item.nombre,
              precio: item.precio,
            })) as Producto[];     
      }),
      catchError((error)=>{
        console.error('Error al obtener los productos', error);
        // Retornar un array vacío en caso de error
        return of([]); 
      })
    );
  }
}
