import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-doin',
  templateUrl: './create-doin.component.html',
  styleUrls: ['./create-doin.component.css']
})
export class CreateDoinComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  currentTask(){

    this.router.navigate(['/doing'])
  }

}
