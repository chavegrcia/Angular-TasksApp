import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  
  constructor(private router : Router, private formBuilder : FormBuilder ) { }


  
   
  form : FormGroup
  
  
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      taskName :[ '' , {
        validators : [ Validators.required , Validators.minLength(3)],
      }]
      
  
    })
  }
  
  saveTask(){
    //....save the task
    
    this.router.navigate(['/tasks'])
  }

  NameFieldError(){
   const field = this.form.get('taskName');

   if(field.hasError('required')){
     return 'Please enter a Task'
   }
   if(field.hasError('minlength')){
     return 'The minimun length is 3'
    }
    else return ''
  }
}

