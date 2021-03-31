import { Component, OnInit } from '@angular/core';
import { Router  } from "@angular/router";

@Component({
  selector: 'app-create-reminder',
  templateUrl: './create-reminder.component.html',
  styleUrls: ['./create-reminder.component.css']
})
export class CreateReminderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  saveReminder(){

    this.router.navigate(['/reminders'])
  }
}
