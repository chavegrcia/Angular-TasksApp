import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-reminder',
  templateUrl: './edit-reminder.component.html',
  styleUrls: ['./edit-reminder.component.css']
})
export class EditReminderComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id)
      
    });
  }

}
