import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  peopleList:any[]=[]

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      result => {
        this.peopleList=result
      },
      error => {
        console.log(error);
      }
    )
  }

    
     delete(person:any) {
      let index = this.peopleList.indexOf(person)
      this.peopleList.splice(index,1);

      this.userService.deleteUser(person.id).subscribe(
        res=>{
          console.log(res);
        },
        err=>{
          console.log(err);
        }
      )
     }

   

}
