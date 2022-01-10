import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(  private mainFormService:MainFormService) { }

  ngAfterViewInit() {
    this.carousel = MaterialService.initCarousel(this.carouselHtml,{
      fullWidth: false,
      indicators: true,
    
    })
    this.tabs = MaterialService.initTabs(this.tabsRef)
  }
  ngOnInit(): void {
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
