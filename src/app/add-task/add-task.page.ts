import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class AddTaskPage implements OnInit {
  
  constructor(
    private taskService: TaskService,
    private alertController: AlertController,
    private router: Router
  ) { }
  
  task: Task = {
    id: '',
    title: '',
    date: '',
    completed: false
  };
  
  ngOnInit(): void {
    
  }

  async onSubmit() {
    console.log('a');
    try {
      await this.taskService.addTask(this.task);
      console.log('b');
      const alert = await this.alertController.create({
        header: 'Task saved',
        message: 'The task has been successfully saved',
        buttons: ['OK'],
      });
      await alert.present();
      this.router.navigate(['/home']); // Redirect to home after registration
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'An error occurred.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  onSignUp(){
    this.router.navigate(['/home']);
  }
}