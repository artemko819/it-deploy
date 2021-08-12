import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { RouterModule } from '@angular/router';
import { QuizRezultPageComponent } from './quiz-rezult-page/quiz-rezult-page.component';
import { QuizMainLayoutComponent } from './shared/layouts/quiz-main-layout/quiz-main-layout.component';
import { QuizIndexComponent } from './quiz-index/quiz-index.component';



@NgModule({
  declarations: [QuizPageComponent, QuizRezultPageComponent, QuizMainLayoutComponent, QuizIndexComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: QuizMainLayoutComponent,children:[
      {path:'',component:QuizIndexComponent},
      {path:'quiz-page',component:QuizPageComponent},
      {path:'quiz-page/rezult',component:QuizRezultPageComponent}
     ]}
    ])
  ],
  exports: [RouterModule]
})
export class QuizModule { }
