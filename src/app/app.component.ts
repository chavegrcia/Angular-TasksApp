import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  ngOnInit() : void{
  }
  
  
  
  handleRating(rate: number){
    if( rate == 1){
      alert(`Your energy today is : ${rate} %,Give me a smile`)
    }else if(rate == 2){
      alert(`Your energy today is : ${rate} %,Thats no to bad,you can do better`)
    }else{
      alert(`Your energy today is : ${rate} %,Lets do some work and take that good energy!!! `)
      
    }
  }
  // selected: Date;
 title:'';
}
