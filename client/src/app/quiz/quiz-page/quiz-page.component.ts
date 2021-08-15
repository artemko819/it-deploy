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
  rezultQuiz(){
    this.router.navigate(['rezult'], { relativeTo: this.route })
  }
}
