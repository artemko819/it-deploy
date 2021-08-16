import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  questionOn = false
  city = ''
  course=''
  
  constructor(
    private quizService:QuizService, 
     private router:Router,
     private route: ActivatedRoute) {

   }
   
  ngOnInit(): void {
    const body = document.getElementById("app-main")
    body.classList.add("quiz"); 
    this.quizzes = this.quizService.getQuizzes()
  }
  goTest(){
    this.questionOn = true
  }
  onAnswer(option: boolean){
    this.answerSelected = false
    if(option === true){
      this.correctAnswer++
    }else{
      this.incorrectAnswer++
    }
  }
  nextQuiz(){
    this.quizCouter++
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
    // this.router.navigate(['rezult'], { relativeTo: this.route })
  }
}
