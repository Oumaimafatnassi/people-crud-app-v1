import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

/*import { UserService } from '../user.service'; */

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {


  myForm: FormGroup 

  constructor (private fb: FormBuilder) {
    let formControls = {
      firstname : new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ])
    }

    this.myForm = this.fb.group(formControls);

  }

  get firstname() {
    return this.myForm.get('firstname');
  }

  ngOnInit(): void {

  }

  saveUser() {
    console.log(this.myForm.value);
  }

  /*name = "Oumaima";
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
    ) /
  } */
}
