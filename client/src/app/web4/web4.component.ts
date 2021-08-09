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
    this.titleService.setTitle("Выбери город, IT-курсы Харьков, Ахтырка, Полтава, Лубны, Изюм, Чугуев, Бахмут, Первомайский, Прилуки, Покровск, обучение ИТ-специалистов 【IT-START】 с нуля, стоимость курсов в IT-школе в Харькове 2021");  
    this.metaTagService.addTags([  
      { name: 'description', content: 'Самые сочные ⚡️ IT-курсы в Харьковe, Ахтырке, Полтаве, Чугуеве, Бахмуте, Лубнах, Покровске, Изюме, Чугуеве ⚡️ ➨ Стань IT-специалистом в школе ❗ IT-START ❗ Дизайн, 3d моделирование, Программирование.' },   
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
