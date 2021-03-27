import { Component, OnInit, Input, Output } from '@angular/core';
// import * as EventEmitter from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent implements OnInit {

  constructor() { }

  
  @Input()
  maxRating = 3 ;
  @Input()
  selectedRate = 0;
  @Output()
  onRating : EventEmitter<number> = new EventEmitter<number>();
  previousRate = 0;
  maxRatingArr = [] ;


  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index : number){
    this.selectedRate = index + 1;
  }
 
  handleMouseLeave(){
    if(this.previousRate !== 0){
      this.selectedRate = this.previousRate;
    }else{
      this.selectedRate = 0;

    }
  }

  rate(index : number){
    this.selectedRate = index +1;
    this.previousRate = this.selectedRate;
    this.onRating.emit(this.selectedRate)
  }
}
