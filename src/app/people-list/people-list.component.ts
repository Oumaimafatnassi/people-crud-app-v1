import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  peopleList=[
    {
      id:'1',
      firstname:'Ayoub',
      lastname:'Ghozzi',
      phone:'00 216 85 129'
    },
    {
      id:'2',
      firstname:'Oumaima',
      lastname:'Fatnassi',
      phone:'00 216 85 135'
    },
    {
      id:'3',
      firstname:'May',
      lastname:'Youta',
      phone:'00 216 85 140'
    }
    
     ]

    
     delete(idpeople:any) {
      let index = -1;
      for(let i=0; i<this.peopleList.length;i++){
        if(this.peopleList[i].id== idpeople){
          index=i
          break
        }
      }
      this.peopleList.splice(index,1);
     }

   

}
