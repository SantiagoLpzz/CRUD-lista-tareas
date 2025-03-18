import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.page.html',
  styleUrls: ['./agregar-tarea.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class AgregarTareaPage implements OnInit {

  ngOnInit(): void{

  }

  list: Task = {
    title: '',
    id: '',
    date: '',
    completed: false
  };
  

  constructor(
    private taskService: TaskService,
    private alertController: AlertController,
    private router: Router
  ) {}

  async onSubmit() {
    try {
      await this.taskService.addTask(this.list);
      const alert = await this.alertController.create({
        header: 'Task saved',
        message: 'The task has been succesfully saved',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/home']); //Redirigir a home despues del registro
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'An error occured.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }



}
