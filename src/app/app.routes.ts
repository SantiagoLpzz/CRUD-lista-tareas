import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'agregar-tarea',
    loadComponent: () => import('./agregar-tarea/agregar-tarea.page').then( m => m.AgregarTareaPage)
  },
  {
    path: 'editar-tarea',
    loadComponent: () => import('./editar-tarea/editar-tarea.page').then( m => m.EditarTareaPage)
  },
  {
    path: 'eliminar-tarea',
    loadComponent: () => import('./eliminar-tarea/eliminar-tarea.page').then( m => m.EliminarTareaPage)
  },
  {
    path: 'mostrar-tarea',
    loadComponent: () => import('./mostrar-tarea/mostrar-tarea.page').then( m => m.MostrarTareaPage)
  },
  {
    path: 'add-task',
    loadComponent: () => import('./add-task/add-task.page').then( m => m.AddTaskPage)
  },
];
