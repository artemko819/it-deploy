import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../admin/shared/interfaces';
import { CategoriesService } from '../admin/shared/services/categories.service';
import { PositionService } from '../admin/shared/services/position.service';
import { Title, Meta } from '@angular/platform-browser';  
@Component({
  selector: 'app-web5',
  templateUrl: './web5.component.html',
  styleUrls: ['./web5.component.css']
})
export class Web5Component implements OnInit {
  categories$:Observable<Category[]>
  categoryId
  positions$
  constructor(
    private categoriesService:CategoriesService,
    private positionService:PositionService,
    private titleService: Title,  
    private metaTagService: Meta
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Выбор города, IT-курсы Харьков, Ахтырка, Полтава, Лубны, Изюм, Чугуев, Бахмут, Первомайский, Прилуки, Покровск, обучение ИТ-специалистов 【IT-START】 с нуля, стоимость курсов в IT-школе в Харькове 2021");  
    this.metaTagService.addTags([  
      { name: 'description', content: 'Самые сочные ⚡️ IT-курсы в Харьковe, Ахтырке, Полтаве, Чугуеве, Бахмуте, Лубнах, Покровске, Изюме, Чугуеве ⚡️ ➨ Стань IT-специалистом в школе ❗ IT-START ❗ Дизайн, 3d моделирование, Программирование.' }, 
    ]);  
    const body = document.getElementById("app-main")
    body.classList.add("ov");
    this.categories$ =  this.categoriesService.fetchFront()
    
     this.categories$.subscribe(cat=>{
      cat.forEach(cat=>{
        this.categoryId = cat._id
        // console.log(this.categoryId)
        this.positions$ = this.positionService.fetchFront(this.categoryId)
        this.positions$.subscribe(pos=>{
          if(pos.length>0){
            pos.forEach(pos=>{
              this.categoryId = pos.category
              console.log(this.categoryId)
            })
          }
        })
      })
       
     })
 
  }

}
