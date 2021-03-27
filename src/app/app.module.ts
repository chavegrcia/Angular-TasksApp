import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsListComponent,
    GenericListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
