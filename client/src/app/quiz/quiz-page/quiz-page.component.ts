import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialInstance, MaterialService } from 'src/app/admin/shared/classes/material.service';
import { Test, TestSchool } from 'src/app/admin/shared/interfaces';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
  quizzes:Quiz [] = [];
  quizCouter=0;
  answerSelected = true
  correctAnswer = 0
  incorrectAnswer = 0
  rezult = false
  school = ''
  questionOn = false
  modal: MaterialInstance
  city = ''
  regForm = false
  course=''
  web='web'
  ballWeb = 0
  totalWeb = 0
  design='design'
  ballDesign = 0
  totalDesign =0
  game='game'
  ballGame = 0
  totalGame = 0
  rezultTest
  video = false
  formConsult: FormGroup
  constructor(
    private quizService:QuizService, 
     private router:Router,
     private route: ActivatedRoute) {

   }
   videoPlay = true;
  ngOnInit(): void {  
    const body = document.getElementById("app-main")
    body.classList.add("quiz"); 
    this.quizzes = this.quizService.getQuizzes()
    this.formConsult = new FormGroup({
      name: new FormControl(null, Validators.required),
      name2: new FormControl(null, Validators.required),
      tel: new FormControl(null, [Validators.required, Validators.pattern('[- +()0-9]+')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    })
  }
  submitConsult(){
    this.formConsult.disable()
    const newPerson: Test = {
      name: this.formConsult.value.name,
      name2:this.formConsult.value.name2,
      school:this.school,
      email: this.formConsult.value.email,
      tel: this.formConsult.value.tel,
      city: this.city,
      course: this.course,
      date: new Date(Date.now()).toLocaleString(),
    }
    console.log(newPerson)
    this.quizService.create(newPerson).subscribe(person => {
      // MaterialService.toast("?????????????? ???? ??????????????????????. ?? ???????? ????'??????????????.")
      // this.modal.close()
      this.router.navigate(['test/quiz-page/rezult'])   
    },
        err => {
        MaterialService.toast(err.error.message)
        this.formConsult.enable()
      }
    )
  }
  goTest(){
    this.questionOn = true
    const newSchool:TestSchool = {
      school:this.school,
      city: this.city,
    }
    this.quizService.createSchool(newSchool).subscribe(person => {
      MaterialService.toast("???????????? ???????? ???? ?????????????? ??????????????????")
      // this.modal.close()
    },
        err => {
        MaterialService.toast(err.error.message)
        this.formConsult.enable()
      }
    )
  }
  regQuiz(){
    this.rezult = false
   this.regForm = true
 
  }
  onAnswer(option){
    this.answerSelected = false
    this.ballWeb =0;
    this.ballDesign =0;
    this.ballGame = 0;
    for(let op in option){
      if(op === this.web){
        this.ballWeb +=1
     //   console.log(this.ballWeb)
      }
      if(op === this.design){
        this.ballDesign +=1
      //  console.log(this.ballDesign)
      }
      if(op === this.game){
        this.ballGame +=1
       // console.log(this.ballGame)
      }
    }
   
  }
  nextQuiz(){
    this.quizCouter++
    this.totalWeb = this.totalWeb + this.ballWeb;
    this.totalDesign = this.totalDesign + this.ballDesign
    this.totalGame = this.totalGame + this.ballGame
    console.log('web:'+this.totalWeb)
   console.log('design:'+this.totalDesign)
   console.log('game:'+this.totalGame)
    this.answerSelected = true
  }
  juniorSelect(course){
    this.course = 'junior'
  }
  junior2Select(course){
    this.course = 'junior2'
  }
  evoSelect(course){
    this.course = 'evo'
    this.quizzes=this.quizService.getQuizzesEvo()
  }
  evo2Select(course){
    this.course = 'evo2'
    this.quizzes=this.quizService.getQuizzesEvo()
  }
  rezultQuiz(){
    this.rezult = true
    this.totalWeb = this.totalWeb + this.ballWeb;
    this.totalDesign = this.totalDesign + this.ballDesign
    this.totalGame = this.totalGame + this.ballGame
    // this.video = true
    // if(this.video === true){
    //   setTimeout(()=>{
    //     this.videoPlay = false
    //   },4000)
    // }
    // this.router.navigate(['rezult'], { relativeTo: this.route })
  }
}
