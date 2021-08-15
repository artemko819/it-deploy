import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { RouterModule } from '@angular/router';
import { QuizRezultPageComponent } from './quiz-rezult-page/quiz-rezult-page.component';
import { QuizMainLayoutComponent } from './shared/layouts/quiz-main-layout/quiz-main-layout.component';
import { QuizIndexComponent } from './quiz-index/quiz-index.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [QuizPageComponent, QuizRezultPageComponent, QuizMainLayoutComponent, QuizIndexComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: QuizMainLayoutComponent,children:[
      {path:'',component:QuizIndexComponent},
      {path:'register-quiz',component:RegisterPageComponent},
      {path:'quiz-page',component:QuizPageComponent},
      {path:'quiz-page/rezult',component:QuizRezultPageComponent}
     ]}
    ])
  ],
  exports: [RouterModule]
})
export class QuizModule { }
