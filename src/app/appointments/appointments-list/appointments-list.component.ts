import { Component, Input, OnInit } from '@angular/core';
import { CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

   
   
  }
  
  
  @Input()
  appointments;
  
  delete(index : number){
    this.appointments.splice(index,1)
    
  }
  
  
 
    

    

  

}
