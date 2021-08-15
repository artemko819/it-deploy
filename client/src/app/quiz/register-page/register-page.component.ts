import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialService } from 'src/app/admin/shared/classes/material.service';
import { Consult } from 'src/app/admin/shared/interfaces';
import { ConsultService } from 'src/app/admin/shared/services/consult.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  formConsult: FormGroup
  modal: any;
  constructor(  private consultService: ConsultService,
                private router:Router,
                private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const body = document.getElementById("app-main")
    body.classList.add("quiz"); 
    this.formConsult = new FormGroup({
      name: new FormControl(null, Validators.required),
      tel: new FormControl(null, [Validators.required, Validators.pattern('[- +()0-9]+')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }
  submitConsult(){
    this.formConsult.disable()
    const newPerson: Consult = {
      name: this.formConsult.value.name,
      email: this.formConsult.value.email,
      tel: this.formConsult.value.tel,
       city: this.formConsult.value.tel,
       course: this.formConsult.value.tel,
      date: new Date(Date.now()).toLocaleString(),
    }

    // this.consultService.create(newPerson).subscribe(person => {
    //   MaterialService.toast("Вы зарегестироровались, можете пройти тест.")
    //   this.modal.close()
    // },
    //     err => {
    //     MaterialService.toast(err.error.message)
    //     this.formConsult.enable()
    //   }
    // )
    this.router.navigate(['quiz/quiz-page'])
  }
  
  
}
