import { Component, OnInit } from '@angular/core';
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
  constructor(private quizService:QuizService) {

   }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzes()
  }
  onAnswer(option: boolean){
    this.answerSelected = false
  }
  nextQuiz(){
    this.quizCouter++
    this.answerSelected = true
  }
}
