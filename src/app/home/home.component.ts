import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout((loading) => {
      this.currentAppointments= 
        [{
          name: 'Orientacion',
          relaseDate : new Date(),
          poster: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbmFsJTIwZ3Jvd3RofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        },
        {
          name: 'Computer-Science',
          relaseDate : new Date('2021-08-14'),
          poster: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        }];
        
        this.upcomingAppointments =
        [{
          name: 'Bitcoin inversion',
          relaseDate : new Date('2020-11-5'),
          poster: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8Yml0Y29pbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        
        },
        {
          name: 'Hackaton',
          relaseDate : new Date('2022-06-10'),
          poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGFja2F0aG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
          
        }];
        
    }, 1000);
    
      
    }
  
    currentAppointments;
    upcomingAppointments;
    
  }


