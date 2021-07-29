import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../shared/classes/material.service';
import { Consult } from '../shared/interfaces';
import { ConsultService } from '../shared/services/consult.service';

@Component({
  selector: 'app-consult-page',
  templateUrl: './consult-page.component.html',
  styleUrls: ['./consult-page.component.css']
})
export class ConsultPageComponent implements OnInit {
  consults
  constructor(private consultService: ConsultService) { }

  ngOnInit(): void {
    this.consultService.fetch().subscribe(person=>{
      this.consults = person
      console.log(this.consults)
    })
  }
  onDeletePosition(event:Event,consult: Consult) {
    event.stopPropagation()
    const decision = window.confirm(`Удалить заявку "${consult.name}" ?`)
    if(decision){
      this.consultService.delete(consult).subscribe(
        response=>{
          const idx = this.consults.findIndex(p=> p._id === consult._id)
          this.consults.splice(idx,1)
          MaterialService.toast(response.message)
        },
        error=>{
          MaterialService.toast(error.error.message)
        }
      )
    }
  }


}
