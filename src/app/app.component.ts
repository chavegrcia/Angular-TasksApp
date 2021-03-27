import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() : void{
  setTimeout((loading) => {
    this.currentAppointments= 
      [{
        name: 'Orientacion',
        relaseDate : new Date(),
        price : 1400.99
      },
      {
        name: 'Computer-Science',
        relaseDate : new Date('2021-08-14'),
        price : 200.99
      }];

      this.upcomingAppointments = 
      [{
        name: 'Bitcoin inversion',
        relaseDate : new Date('2020-11-5'),
        price : 100.99
      },
      {
        name: 'Hackaton',
        relaseDate : new Date('2022-06-10'),
        price : 20.00
      }];
  }, 2000);
  
    
  }

  currentAppointments;
  upcomingAppointments;
  

   title = 'APPOINTMENT';


 

}

