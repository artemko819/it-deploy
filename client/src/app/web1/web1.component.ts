import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';  
@Component({
  selector: 'app-web1',
  templateUrl: './web1.component.html',
  styleUrls: ['./web1.component.css']
})
export class Web1Component implements OnInit{

  constructor( private router:Router,
               private titleService: Title,  
               private metaTagService: Meta  
    ) { }
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    select:boolean = false;

    ngOnInit() {
      this.titleService.setTitle("IT-курсы Харьков, Ахтырка, Полтава, Чугуев, Бахмут, Константиновка, обучение ИТ-специалистов 【IT-START】 с нуля, стоимость курсов в IT-школе в Харькове 2021");  
      this.metaTagService.addTags([  
        { name: 'description', content: 'Самые сочные ⚡️ IT-курсы в Харьковe, Ахтырке, Полтаве, Чугуеве, Бахмуте, Константиновке ⚡️ ➨ Стань IT-специалистом в школе ❗ IT-START ❗ Дизайн, 3d моделирование, Программирование.' },  
        { name: 'robots', content: 'index, follow' },  
        { charset: 'UTF-8' }  
      ]);  
      
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
 

}
