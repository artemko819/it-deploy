import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QuizService } from 'src/app/quiz/quiz.service';
import { MaterialService } from '../shared/classes/material.service';
import { Test } from '../shared/interfaces';
// import jsPDF from 'jspdf';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import htmlToPdfmake from 'html-to-pdfmake';
@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  consults
  constructor(private consultService: QuizService) { }

  ngOnInit(): void {
    this.consultService.fetch().subscribe(person=>{
      this.consults = person
      console.log(this.consults)
    })
  }
  onDeletePosition(event:Event,consult: Test) {
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
