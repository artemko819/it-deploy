import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
declare var particlesJS: any;
@Component({
  selector: 'app-web1',
  templateUrl: './web1.component.html',
  styleUrls: ['./web1.component.css']
})
export class Web1Component implements OnInit{

  constructor( private router:Router,
               private titleService: Title,  
               private metaTagService: Meta  
    ) { 
      particlesJS.load('particles-js', '../assets/particles.json', null);
    }
 
    select:boolean = false;

    ngOnInit() {
      
      this.titleService.setTitle("IT-курсы Харьков, Ахтырка, Полтава, Лубны, Изюм, Мерефа, Первомайский, Чугуев, Бахмут ,Прилуки, Покровск, обучение ИТ-специалистов 【IT-START】 с нуля. Дизайн, 3d моделирование, Программирование");  
      this.metaTagService.addTags([  
        { name: 'description', content: 'Самые сочные ⚡️ IT-курсы в Харьковe, Ахтырке, Первомайский, Полтаве, Чугуеве, Бахмуте, Лубнах, Изюме, Чугуеве ⚡️ ➨ Стань IT-специалистом в школе ❗ IT-START ❗ Дизайн, 3d моделирование, Программирование.' },  
        { name: 'robots', content: 'index, follow' },  
      ]);  
      
      const body = document.getElementById("app-main")
      body.classList.add("ov");
  }
  
  btnClick(){
    this.select = true
    setTimeout(()=>{
      this.router.navigate(['web-2'])
    }, 1000);
  }
 

}
