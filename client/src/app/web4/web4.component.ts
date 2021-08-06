import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';  
@Component({
  selector: 'app-web4',
  templateUrl: './web4.component.html',
  styleUrls: ['./web4.component.css']
})
export class Web4Component implements OnInit {

  constructor(private router: Router,
              private titleService: Title,  
              private metaTagService: Meta  
    ) { }
  select: boolean = false;
  ngOnInit(): void {
    this.titleService.setTitle("IT-START - Школа компьютерных технологий");  
    this.metaTagService.addTags([  
      { name: 'keywords', content: 'IT-START школа компьютерных технологий' },  
      { name: 'robots', content: 'index, follow' },  
      { name: 'writer', content: 'John Smith' },  
      { charset: 'UTF-8' }  
    ]);  
    
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
