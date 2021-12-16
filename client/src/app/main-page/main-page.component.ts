import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialInstance, MaterialService } from '../admin/shared/classes/material.service';
import { MainForm } from '../admin/shared/interfaces';
import { MainFormService } from '../admin/shared/services/main.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  @ViewChild('carousel') carouselHtml: ElementRef
  @ViewChild('carouselMobile') carouselMobileHtml: ElementRef
  @ViewChild('modal') modalRef: ElementRef
  @ViewChild('tabs') tabsRef: ElementRef
  carousel:MaterialInstance
  carouselMobile:MaterialInstance
  modal: MaterialInstance
  tabs:MaterialInstance
  formMain: FormGroup


  constructor(
    private mainFormService:MainFormService
  ) { }

  open() {  
    this.modal.open()
  }
  close() {
    this.modal.close()
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  ngAfterViewInit() {
    this.carousel = MaterialService.initCarousel(this.carouselHtml,{
      fullWidth: false,
      indicators: true,
    
    })
    this.carouselMobile = MaterialService.initCarousel(this.carouselMobileHtml,{
      indicators: true, 
    })
    this.modal = MaterialService.initModal(this.modalRef)
    this.tabs = MaterialService.initTabs(this.tabsRef)
   
  }
  ngOnInit(): void {
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
