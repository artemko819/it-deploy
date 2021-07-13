import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MaterialService } from '../shared/classes/material.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit ,OnDestroy{
  form: FormGroup
  aSub: Subscription
  constructor(private auth:AuthService,
              private router:Router,
              private route: ActivatedRoute
    ) { }

  ngOnDestroy(){
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }

  ngOnInit(): void {
    //validation
    this.form = new FormGroup({ 
      email: new FormControl(null,[
          Validators.email,
          Validators.required]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])
    })

    this.route.queryParams.subscribe((params:Params)=>{
      if(params['registered']){
        // Теперь вы можите зайти в систему используя свои данные
        MaterialService.toast('Теперь вы можите зайти в систему используя свои данные')
      } else if(params['accessDenied']){
        //для начала авторизуйтесь в системе
        MaterialService.toast('для начала авторизуйтесь в системе')
      }else if(params['sessionFailed']){
        MaterialService.toast('Пожалуйста войдите в систему заново')
      }
    })

  }

  onSubmit(){
    //form button disable
    this.form.disable()
    //go to login admin
    this.aSub = this.auth.login(this.form.value).subscribe(
      ()=> this.router.navigate(['/admin/owerview']),
      error=>{
        MaterialService.toast(error.error.message)
        console.log(error)
        this.form.enable()
      }
    )
  }

}
