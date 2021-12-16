import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var particlesJS: any;
@Component({
  selector: 'app-web2',
  templateUrl: './web2.component.html',
  styleUrls: ['./web2.component.css']
})
export class Web2Component implements OnInit {

  constructor(private router:Router) { }
    hide 
    route
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  loader: boolean = false
  goTo:boolean =false
 
  ngOnInit() {
    particlesJS.load('particles-js', '../assets/particles.json', null);
    // setTimeout(()=> {
    //     this.router.navigate(['web-3'])
    // }, 999400);
    // setTimeout(() => {
    //     this.goTo = true
    //   }, 1500);
    // setTimeout(() => {
    //     this.loader = true
    //   }, 2500);
    //   setTimeout(() => {
    //     this.goTo = false
    //   }, 7500);
    this.hide =  setTimeout(()=> {
            // this.router.navigate(['web-4'])
            this.goTo = true
        }, 1500);
     this.route =  setTimeout(()=> {
              this.router.navigate(['web-4'])
        }, 2500);
   
}


}
