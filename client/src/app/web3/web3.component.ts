import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var particlesJS: any;
@Component({
  selector: 'app-web3',
  templateUrl: './web3.component.html',
  styleUrls: ['./web3.component.css']
})
export class Web3Component implements OnInit {

  constructor(private router:Router) { }

  
 

  ngOnInit() {
    particlesJS.load('particles-js', '../assets/particles.json', null);
    setTimeout(()=>{
        this.router.navigate(['web-4'])
    }, 1300);
 
}

}
