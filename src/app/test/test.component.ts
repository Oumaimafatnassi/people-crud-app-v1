import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  name = "Oumaima";
  imageUrl ="assets/images/formalab-logo-1.png"; 

  booksList = ['learn angular 9','get started with android', 'java From Scratch'];

  usersList :any;

  myCondition = false ;

  hello(myname:String){
    alert('Hello ' +myname);
  }

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      result => {
        this.usersList = result;
      },
      error => { 
        console.log(error);
      }
    )
  }
}
