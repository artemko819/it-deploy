import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialInstance, MaterialService } from 'src/app/admin/shared/classes/material.service';
import { Person } from 'src/app/admin/shared/interfaces';
import { PersonService } from 'src/app/admin/shared/services/person.service';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
@Component({
  selector: 'app-quiz-rezult-page',
  templateUrl: './quiz-rezult-page.component.html',
  styleUrls: ['./quiz-rezult-page.component.css']
})
export class QuizRezultPageComponent implements OnInit ,OnDestroy, AfterViewInit {
  @Input() item = ''
  @ViewChild('modal') modalRef: ElementRef
  form: FormGroup
  modal: MaterialInstance
  ticket:any = ''
  @ViewChild('pdfTable') pdfTable: ElementRef;
   
  
  public downloadAsPDF() {
    const doc = new jsPDF();
   
    const pdfTable = this.pdfTable.nativeElement;
   
    var html = htmlToPdfmake(pdfTable.innerHTML);
     
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
     
  }

  constructor(    private personService: PersonService,) { }

  ngOnInit(): void {
    const body = document.getElementById("app-main")
    body.classList.add("quiz"); 
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      tel: new FormControl(null, [Validators.required, Validators.pattern('[- +()0-9]+')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }
  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)
   
    // this.tabs2 = MaterialService.initTabs(this.tabs2Ref)
    // this.tabs3 = MaterialService.initTabs(this.tabs3Ref)
  }
  open() {  
    this.modal.open()
  }
  close() {
    this.modal.close()
  }
  ngOnDestroy() {
    this.modal.destroy()
  }
  submit() {
    this.form.disable()
    const newPerson: Person = {
      name: this.form.value.name,
      email: this.form.value.email,
      tel: this.form.value.tel,
      city:this.form.value.tel,
      course: this.form.value.tel,
      date: new Date(Date.now()).toLocaleString(),
    }
    this.ticket = newPerson;
    this.modal.close()
    // this.personService.create(newPerson).subscribe(person => {
    //   MaterialService.toast("Поздравляем вы получили билет на встречу!")
    //   this.modal.close()
    // },
    //   err => {
    //     MaterialService.toast(err.error.message)
    //     this.form.enable()
    //   }
    // )
  }

}
