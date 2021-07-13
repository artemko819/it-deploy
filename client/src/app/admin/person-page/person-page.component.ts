import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../shared/classes/material.service';
import { Person } from '../shared/interfaces';
import { PersonService } from '../shared/services/person.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {
  persons
  constructor(private personService:PersonService) { 
    
  }

  ngOnInit(): void {
    this.personService.fetch().subscribe(person=>{
      this.persons = person
      console.log(this.persons)
    })
  }
  onDeletePosition(event:Event,person: Person) {
    event.stopPropagation()
    const decision = window.confirm(`Удалить заявку "${person.name}" ?`)
    if(decision){
      this.personService.delete(person).subscribe(
        response=>{
          const idx = this.persons.findIndex(p=> p._id === person._id)
          this.persons.splice(idx,1)
          MaterialService.toast(response.message)
        },
        error=>{
          MaterialService.toast(error.error.message)
        }
      )
    }
  }


}
