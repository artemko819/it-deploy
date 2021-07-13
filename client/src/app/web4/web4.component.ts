import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web4',
  templateUrl: './web4.component.html',
  styleUrls: ['./web4.component.css']
})
export class Web4Component implements OnInit {

  constructor(private router: Router) { }
  select: boolean = false;
  ngOnInit(): void {
    const body = document.getElementById("app-main")
    body.classList.add("ov");
       setTimeout(() => {
        this.select = true;
  }, 100);
  //     setTimeout(() => {
  //    this.router.navigate(['city']);
  //  }, 3000);
  }

}
