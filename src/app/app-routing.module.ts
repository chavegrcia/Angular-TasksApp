import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { CreateDoinComponent } from './doing/create-doin/create-doin.component';
import { DoingListComponent } from './doing/doing-list/doing-list.component';
import { EditDoinComponent } from './doing/edit-doin/edit-doin.component';
import { HomeComponent } from './home/home.component';
import { CreateReminderComponent } from './reminders/create-reminder/create-reminder.component';
import { EditReminderComponent } from './reminders/edit-reminder/edit-reminder.component';
import { RemindersListComponent } from './reminders/reminders-list/reminders-list.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},

  {path:'tasks' , component : TasksListComponent},
  {path:'tasks/create', component : CreateTaskComponent},
  {path:'tasks/edit/:id', component : EditTaskComponent},

  {path:'doing' , component : DoingListComponent},
  {path:'doing/create', component : CreateDoinComponent},
  {path:'doing/edit/:id', component : EditDoinComponent},

  {path:'reminders' , component : RemindersListComponent},
  {path:'reminders/create', component : CreateReminderComponent},
  {path:'reminders/edit/:id', component : EditReminderComponent},

  {path:'calendar' , component : CalendarComponent},
//Esto es para que si el usuario pone una direccion incorrecta lo redirija a la pag principal
  {path: '**' , redirectTo : ''}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
