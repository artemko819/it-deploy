import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes:Quiz[] = [
    {
      question:'Qyestion 1 ',
      answer:[
        {option:'DA NET ?',correct:false},
        {option:'NET DA ?',correct:true},
        {option:'DA-NET ?',correct:false}
      ]
    },
    {
      question:'Qyestion 2 ',
      answer:[
        {option:'NET DA ?',correct:true},
        {option:'DA NET ?',correct:false},        
        {option:'DA-NET ?',correct:false}
      ]
    },
    {
      question:'Qyestion 3 ',
      answer:[
        {option:'DA-NET ?',correct:false},
        {option:'DA NET ?',correct:false},
        {option:'NET DA ?',correct:true},
      ]
    }
  ]
  constructor() { }

  getQuizzes(){
    return this.quizzes
  }
}
