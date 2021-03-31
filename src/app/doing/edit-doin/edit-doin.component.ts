import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-doin',
  templateUrl: './edit-doin.component.html',
  styleUrls: ['./edit-doin.component.css']
})
export class EditDoinComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params => {
       alert(params.id)

    })
  }

}
