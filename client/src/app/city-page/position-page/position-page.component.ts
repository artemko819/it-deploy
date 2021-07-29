import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MaterialInstance, MaterialService } from 'src/app/admin/shared/classes/material.service';
import { Person,Consult } from 'src/app/admin/shared/interfaces';
import { CategoriesService } from 'src/app/admin/shared/services/categories.service';
import { ConsultService } from 'src/app/admin/shared/services/consult.service';
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
  positionFind
  className = null
  form: FormGroup
  formConsult: FormGroup

  persons
  catName
  @ViewChild('modal') modalRef: ElementRef
  modal: MaterialInstance
  route: any;
  constructor(private positionService: PositionService,
    private activateRoute: ActivatedRoute,
    private personService: PersonService,
    private consultService: ConsultService,
    private router: Router,
    private categoriesService: CategoriesService
  ) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      tel: new FormControl(null, [Validators.required, Validators.pattern('[- +()0-9]+')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
    this.formConsult = new FormGroup({
      name: new FormControl(null, Validators.required),
      tel: new FormControl(null, [Validators.required, Validators.pattern('[- +()0-9]+')]),
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
    console.log(this.positionId)
    this.positions$ = this.positionService.fetchFrontPosition(this.categoryId, this.positionId)
    this.positions$.subscribe(pos => {
      this.className = pos.name
    },(error) => {
      this.router.navigate(['/404'])
    })
    this.categoriesService.getByIdFront(this.categoryId).subscribe(catname => {
      this.catName = catname.name
      console.log(this.catName)
    })
  }
  ngOnDestroy() {
    this.modal.destroy()
  }
  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
  }
  open() {
    this.modal.open()
  }
  close() {
    this.modal.close()
  }
  submitConsult(){
    this.formConsult.disable()
    const newPerson: Consult = {
      name: this.formConsult.value.name,
      email: this.formConsult.value.email,
      tel: this.formConsult.value.tel,
      city: this.catName,
      course: this.className,
      date: new Date(Date.now()).toLocaleString(),
    }

    this.consultService.create(newPerson).subscribe(person => {
      MaterialService.toast("Ваша заявка отправлена. С вами свяжуться.")
      this.modal.close()
    },
        err => {
        MaterialService.toast(err.error.message)
        this.form.enable()
      }
    )

  }
  submit() {
    this.form.disable()
    const newPerson: Person = {
      name: this.form.value.name,
      email: this.form.value.email,
      tel: this.form.value.tel,
      city: this.catName,
      course: this.className,
      date: new Date(Date.now()).toLocaleString(),
    }

    this.personService.create(newPerson).subscribe(person => {
      MaterialService.toast("Ваша заявка отправлена. С вами свяжуться.")
      this.modal.close()
    },
      err => {
        MaterialService.toast(err.error.message)
        this.form.enable()
      }
    )
  }
}
