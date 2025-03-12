import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.page.html',
  styleUrls: ['./editar-tarea.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditarTareaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
