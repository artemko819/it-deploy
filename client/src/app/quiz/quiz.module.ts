import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [QuizPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
     { path: '', component: QuizPageComponent}
    ])
  ],
  exports: [RouterModule]
})
export class QuizModule { }
