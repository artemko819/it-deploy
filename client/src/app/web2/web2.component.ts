import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web2',
  templateUrl: './web2.component.html',
  styleUrls: ['./web2.component.css']
})
export class Web2Component implements OnInit , OnDestroy {

  constructor(private router:Router) { }

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  loader: boolean = false
  goTo:boolean =false
  ngOnInit() {
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
      setTimeout(()=> {
            this.router.navigate(['web-3'])
        }, 1000);
    this.myStyle = {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'z-index': 1,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
    };

this.myParams = {
        particles: {
            number: {
                value: 100,
            },
            color: {
                value: '#fff'
            },
            shape: {
                type: 'circle',
            },
    }
};
}

ngOnDestroy(){
    this.myParams = {}
    this.myStyle = {}
}

}
