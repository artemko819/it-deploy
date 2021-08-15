import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-index',
  templateUrl: './quiz-index.component.html',
  styleUrls: ['./quiz-index.component.css']
})
export class QuizIndexComponent implements OnInit {

  constructor( private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const body = document.getElementById("app-main")
    body.classList.add("quiz"); 
  }
  goQuiz(){
    this.router.navigate(['register-quiz'], { relativeTo: this.route })
  }
}
