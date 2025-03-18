import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonCheckbox } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, IonCheckbox, FormsModule, ReactiveFormsModule, CommonModule],
})
export class HomePage {
  
  tareass: Observable<Task[]>;
  constructor(private alertC: AlertController, private router: Router, private taskS: TaskService) {
    this.tareass = taskS.getTasks();
  }
  
  id = new FormControl();
  nombre = new FormControl('',[Validators.required,Validators.minLength(1)]);
  title = new FormControl('',[Validators.required,Validators.minLength(1)]);
  fechaa = new FormControl('',[Validators.required,Validators.minLength(1)]);
  fch = new FormControl('',[Validators.required,Validators.minLength(1)]);
  proposito = new FormControl('',[Validators.required,Validators.minLength(1)]);
  fechaF = new FormControl('',[Validators.required,Validators.minLength(1)]);
  completed = new FormControl();

  tareas: {id: number, nombre: string, fechaa: string, proposito: string, fechaF: string, completed: boolean}[] = [
    {
      id: 0,
      nombre: '',
      fechaa: '',
      proposito: '',
      fechaF: '',
      completed: false,
    }
  ];

  async AddTask(){
    if (this.ValidateFormF()){
      const nTarea: Task = {
        title: this.title.value!,
        date: this.fch.value!,
        completed: false,
      };
      try {
        await this.taskS.addTask(nTarea);
        const alert = await this.alertC.create({
          header: 'SUCCESS',
          message: 'Tarea añadida exitosamente',
          buttons: ['OK'],
        });
        alert.present();
        this.FormTReset();
      } catch (error) {
        console.log('FAIL AL CREAR',error);
      }
    }else{
      const alert = await this.alertC.create({
        header: 'FAIL',
        message: 'Complete todos los espacios correctamente',
        buttons: ['OK'],
      });
      alert.present();
    }
  }

  ValidateForm(){
    return this.fechaF.valid && this.fechaa.valid && this.nombre.valid && this.proposito.valid;
  }
  ValidateFormF(){
    return this.title.valid;
  }

  FormTReset(){
    this.title.reset;
  }

  async Task(id: any, completed: boolean){
    try {
      await this.taskS.updateTask(id, {completed: !completed});
    } catch (error) {
      console.log('FAIL AL ACTUALIZAR EL ESTADO',error);
    }
  }

  async SaveTask(id: any, title:string, date: string){
    try{
      await this.taskS.updateTask(id, {title: title,date: date});
    } catch (error) {
      console.log('FAIL AL ACTUALIZAR NOMBRE',error);
    }
  }

  async DeleteTask(id: any){
    try {
      await this.taskS.deleteTask(id);
    } catch (error) {
      console.log('FAIL AL BORRAR',error);
    }
  }
}
