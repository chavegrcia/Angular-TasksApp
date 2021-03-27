import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { MatDateFormats } from '@angular/material/core';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';




@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  
  constructor(private router : Router , private formBuilder : FormBuilder ) { }

  range = new FormGroup({
  start: new FormControl(),
  end: new FormControl()
  });
  
   
  form : FormGroup
  
  
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      taskName :'',
      
  
    })



  
    
  }
  
  saveTask(){
    //....save the task
    
    this.router.navigate(['/tasks'])
  }
  
}

