import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialInstance, MaterialService } from '../admin/shared/classes/material.service';
import { MainForm } from '../admin/shared/interfaces';
import { MainFormService } from '../admin/shared/services/main.service';
declare var $: any;
@Component({
  selector: 'app-ahtyrka-page',
  templateUrl: './ahtyrka-page.component.html',
  styleUrls: ['./ahtyrka-page.component.css']
})
export class AhtyrkaPageComponent implements OnInit {
  
  @ViewChild('carousel') carouselHtml: ElementRef
  @ViewChild('tabs') tabsRef: ElementRef
  carousel:MaterialInstance
  formMain: FormGroup
  tabs:MaterialInstance
  city:String[] = [
    "aktyrka",
    "lozova",
    "bakhmut",
    "prilyki",
    "kharkov",
    "merefa",
    "сhuguiv",
    "pokrovsk",
    "izym",
    "lubni",
    "romney"
  ]
  cityNames:string[] = [
    "Охтирка",
    "Лозова",
    "Бахмут",
    "Прилуки",
    "Харьків",
    "Мерефа",
    "Чугуїв",
    "Покровськ",
    "Ізюм",
    "Лубни",
    "Ромни"
  ]
  cityName:string = "";
  redirect = true
  cityId: any;
  constructor(  
    private mainFormService:MainFormService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    ) {  }

  ngAfterViewInit() {
    this.carousel = MaterialService.initCarousel(this.carouselHtml,{
      fullWidth: false,
      indicators: true,
    
    })
    this.tabs = MaterialService.initTabs(this.tabsRef)
  }
  ngOnInit(): void {

    this.cityId = this.activateRoute.snapshot.params['id'];
    for(let i=0; i<this.city.length; i++){
      if(this.city[i] === this.cityId){
        this.cityName = this.cityNames[i] 
        console.log(this.cityName)
        this.redirect = false
      }        
    }
    if(this.redirect === true){
      this.router.navigate(['/404'])
    }


    const body = document.getElementById("app-main")
    body.classList.add("gradient");

    $(".testimonial__wrapper").on('mouseover click', (e) => {
      if ($(e.target).is('img')) {
          let parentElement = $(e.target).parent().parent();
          console.log(parentElement);
          parentElement.addClass('active');
          if (parentElement.siblings().hasClass('active')) {
              parentElement.siblings().removeClass('active');
          }
      }
  });

  $(".header .header__bars").on('click', function () {

    var selector = $(".header .header__nav")

    if (selector.hasClass('shown')) {
        selector.css('right', "100%");
        selector.removeClass('shown');
    } else {
        selector.css('right', "0");
        selector.addClass('shown');
    }
});

$(".header .header__nav span").on('click', function () {

    var selector = $(".header .header__nav")

    if (selector.hasClass('shown')) {
        selector.css('right', "100%");
        selector.removeClass('shown');
    } else {
        selector.css('right', "0");
        selector.addClass('shown');
    }
});

    this.formMain = new FormGroup({
      name: new FormControl(null, Validators.required),
      tel: new FormControl(null, [Validators.required, Validators.pattern('[- +()0-9]+')]),
    })
   
  }

  submitConsult(){
    this.formMain.disable()
    const newForm: MainForm = {
      name: this.formMain.value.name,    
      tel: this.formMain.value.tel,
      city: this.cityName, 
      date: new Date(Date.now()).toLocaleString(),
    }
    console.log(newForm)
    this.mainFormService.create(newForm).subscribe(person => {
       MaterialService.toast("Спасибі за регестрацію. З вами зв'яжуться.")
       console.log(newForm)
    },
        err => {
        MaterialService.toast(err.error.message)
        this.formMain.enable()
      }
    )
  }

}
