import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialInstance, MaterialService } from '../admin/shared/classes/material.service';
import { Anketa } from '../admin/shared/interfaces';
import { AnketaService } from '../admin/shared/services/anketa.service';

@Component({
  selector: 'app-masterklass',
  templateUrl: './masterklass.component.html',
  styleUrls: ['./masterklass.component.css']
})
export class MasterklassComponent implements OnInit {
  formConsult: FormGroup
  city='Харьков'
  course= "junior"
  modal: MaterialInstance
  constructor(    private anketaService: AnketaService,) { }

  ngOnInit(): void {
    this.formConsult = new FormGroup({
      name: new FormControl(null, Validators.required),
      tel: new FormControl(null, [Validators.required, Validators.pattern('[- +()0-9]+')]),
      city: new FormControl(null, Validators.required),
    })
  }
  submitConsult(){
    this.formConsult.disable()
    const newPerson: Anketa = {
      name: this.formConsult.value.name,
      tel: this.formConsult.value.tel,
      city: this.city,
      course: this.course,
      date: new Date(Date.now()).toLocaleString(),
    }

    this.anketaService.create(newPerson).subscribe(person => {
      MaterialService.toast("Ваша заявка відправлена. З вами зв'яжуться.")
      this.modal.close()
    },
        err => {
        MaterialService.toast(err.error.message)
        this.formConsult.enable()
      }
    )
  }
  juniorSelect(course){
    this.course = 'junior'
  }
  junior2Select(course){
    this.course = 'junior2'
  }
  evoSelect(course){
    this.course = 'evo'

  }
  evo2Select(course){
    this.course = 'evo2'
  }
}
