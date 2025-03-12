import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarTareaPage } from './mostrar-tarea.page';

describe('MostrarTareaPage', () => {
  let component: MostrarTareaPage;
  let fixture: ComponentFixture<MostrarTareaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarTareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
