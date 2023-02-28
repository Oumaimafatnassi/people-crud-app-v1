import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  name = "Oumaima";
  imageUrl ="assets/images/formalab-logo-1.png"; 

  booksList = ['learn angular 9','get started with android', 'java From Scratch'];

  myCondition = false ;

  hello(myname:String){
    alert('Hello ' +myname);
  }
}
