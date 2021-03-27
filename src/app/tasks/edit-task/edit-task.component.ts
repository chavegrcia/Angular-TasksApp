import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute){

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      alert(params.id)
      
    })
  }

}
