import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MaterialInstance, MaterialService } from 'src/app/admin/shared/classes/material.service';
import { Person } from 'src/app/admin/shared/interfaces';
import { CategoriesService } from 'src/app/admin/shared/services/categories.service';
import { PersonService } from 'src/app/admin/shared/services/person.service';
import { PositionService } from 'src/app/admin/shared/services/position.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-position-page',
  templateUrl: './position-page.component.html',
  styleUrls: ['./position-page.component.css']
})
export class PositionPageComponent implements OnInit, OnDestroy, AfterViewInit {
  positions$
  categoryId
  positionId
  className = ""
  form: FormGroup
  persons
  catName
  @ViewChild('modal') modalRef:ElementRef
  modal: MaterialInstance
  constructor(private positionService: PositionService,
    private activateRoute: ActivatedRoute,
    private personService:PersonService,
    private categoriesService:CategoriesService
  ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      tel: new FormControl(null, [Validators.required,Validators.pattern('[- +()0-9]+')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
   
    const options = {
      strings: ['Обучайся!', 'Практикуйся!', 'Развивайся!'],
      typeSpeed: 50,
      backSpeed: 30,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
    const typed = new Typed('.typed-element', options);
    const body = document.getElementById("app-main")
    body.classList.remove("ov");
    this.categoryId = this.activateRoute.snapshot.params['id'];
    this.positionId = this.activateRoute.snapshot.params['position'];
    this.positions$ = this.positionService.fetchFrontPosition(this.categoryId, this.positionId)
    this.positions$.subscribe(pos => {
      this.className = pos.name
    })
    this.categoriesService.getByIdFront(this.categoryId).subscribe(catname=>{
      this.catName = catname.name
      console.log(this.catName)
    })
  }
  ngOnDestroy(){
    this.modal.destroy()
  }
  ngAfterViewInit(){
    this.modal = MaterialService.initModal(this.modalRef)
  }
  open(){
    this.modal.open()
  }
  close(){
    this.modal.close()
  }
  submit(){
    this.form.disable()
    
    const newPerson: Person = {
      name: this.form.value.name,
      email:this.form.value.email,
      tel: this.form.value.tel,
      city:this.catName,
      course:this.className,
      date: new Date(Date.now()).toLocaleString(),
    }
   
    this.personService.create(newPerson).subscribe(person=>{
      MaterialService.toast("Ваша данные отправлены")
      this.modal.close()
    },
    err=>{
      MaterialService.toast(err.error.message)
      this.form.enable()
    }
    )
  }
}
