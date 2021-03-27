import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { MoodComponent } from './utilities/mood/mood.component';
import { HomeComponent } from './home/home.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { DoingListComponent } from './doing/doing-list/doing-list.component';
import { CreateDoinComponent } from './doing/create-doin/create-doin.component';
import { RemindersListComponent } from './reminders/reminders-list/reminders-list.component';
import { CreateReminderComponent } from './reminders/create-reminder/create-reminder.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EditDoinComponent } from './doing/edit-doin/edit-doin.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { EditReminderComponent } from './reminders/edit-reminder/edit-reminder.component'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsListComponent,
    GenericListComponent,
    MenuComponent,
    MoodComponent,
    HomeComponent,
    TasksListComponent,
    CreateTaskComponent,
    DoingListComponent,
    CreateDoinComponent,
    RemindersListComponent,
    CreateReminderComponent,
    CalendarComponent,
    EditDoinComponent,
    EditTaskComponent,
    EditReminderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
