import { TestBed } from '@angular/core/testing';

import { GetProductosService } from './get-productos.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('GetProductosService', () => {
  let service: GetProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetProductosService, HttpClient]
    });
    service = TestBed.inject(GetProductosService);
   
  });

  it('componente debe ser inicializado', () => {
    expect(service).toBeTruthy();
  });

  it('debe obtener datos de productos', () => {
    service.getData().subscribe(data => {
      expect(data).toBeTruthy();
      expect(data.length).toBeGreaterThan(0);
    });
  });
});
