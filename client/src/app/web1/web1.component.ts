import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-web1',
  templateUrl: './web1.component.html',
  styleUrls: ['./web1.component.css']
})
export class Web1Component implements OnInit, OnDestroy {

  constructor( private router:Router) { }
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    select:boolean = false;

    ngOnInit() {
      const body = document.getElementById("app-main")
      body.classList.add("ov");
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
                  value:50,
              },
              color: {
                  value: '#fff'
              },
              shape: {
                  type: 'circle',
              },
              
      },
      interactivity:{
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
      }
  };
  }
  
  btnClick(){
    this.select = true
    setTimeout(()=>{
      this.router.navigate(['web-2'])
    }, 1000);
  }
  ngOnDestroy(){
    this.myParams = {}
    this.myStyle = {}
}

}
