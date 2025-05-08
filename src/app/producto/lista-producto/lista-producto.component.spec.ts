import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProductoComponent } from './lista-producto.component';
import { GetProductosService } from '../get-productos.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ListaProductoComponent', () => {
  let component: ListaProductoComponent;
  let fixture: ComponentFixture<ListaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProductoComponent],
      providers: [GetProductosService, HttpClient, HttpHandler],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('el componente debe ser creado', () => {
    expect(component).toBeTruthy();
  });
});
