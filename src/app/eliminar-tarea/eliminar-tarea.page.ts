import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-eliminar-tarea',
  templateUrl: './eliminar-tarea.page.html',
  styleUrls: ['./eliminar-tarea.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EliminarTareaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
