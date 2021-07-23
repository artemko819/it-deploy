import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web3',
  templateUrl: './web3.component.html',
  styleUrls: ['./web3.component.css']
})
export class Web3Component implements OnInit, OnDestroy {

  constructor(private router:Router) { }

  
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    setTimeout(()=>{
        this.router.navigate(['web-4'])
    }, 1000);
    this.myStyle = {
        'position': 'relative',
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
                value: 20,
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
