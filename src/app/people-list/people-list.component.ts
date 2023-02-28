import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  peopleList=[
    {
      id: 1,
      firstname:'Ayoub',
      lastname:'Ghozzi',
      phone:'00 216 85 129'
    },
    {
      id:2,
      firstname:'Oumaima',
      lastname:'Fatnassi',
      phone:'00 216 85 135'
    },
    {
      id:3,
      firstname:'May',
      lastname:'Youta',
      phone:'00 216 85 140'
    }
    
     ]

    
     delete(peoples:any) {
      let index = this.peopleList.indexOf(peoples)
      this.peopleList.splice(index,1);
     }

   

}
