import { Routes } from '@angular/router';
import { NombreComponent } from './nombre/nombre.component';
import {ListaProductoComponent} from './producto/lista-producto/lista-producto.component'

export const routes: Routes = [
    { path: '', redirectTo: '/nombre', pathMatch: 'full' },
    { path: 'nombre', component: NombreComponent }, 
    { path: 'producto', component: ListaProductoComponent },  
];
