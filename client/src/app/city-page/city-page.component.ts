import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { MaterialService } from '../admin/shared/classes/material.service';
import { Position } from '../admin/shared/interfaces';
import { CategoriesService } from '../admin/shared/services/categories.service';
import { PositionService } from '../admin/shared/services/position.service';
import { Title, Meta } from '@angular/platform-browser';  
@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit{
  leftMove = true
  rightMove = false
  isNew = false
  positions$: Observable<Position[]>
  categoryId
  move = 0
  couter = 0;
  positionFind = []
  activeBuild:boolean = true
  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private titleService: Title,  
    private metaTagService: Meta,
    private router: Router,
    private positionService: PositionService,
    private activateRoute: ActivatedRoute,

  ) { }
  moveRight(move){
    move = this.move + -350
    this.move = move
    if(this.move === -1050 ){
      this.rightMove = true
    }
    if(this.move === -350 ){
      this.leftMove = false
    }
    if(this.move === -700){
      this.rightMove = false
    }
    
  }
  moveLeft(move){
    move = this.move + 350
    this.move = move
    if(this.move === -1050 ){
      this.rightMove = true
    }
    if(this.move === -350 ){
      this.leftMove = false
    }
    if(this.move === 0){
      this.leftMove = true
    }
    if(this.move === -700){
      this.rightMove = false
    }
  }
  
  
  ngOnInit(): void {
    const body = document.getElementById("app-main")
    body.classList.add("ov");
    //города
    this.categoryId = this.activateRoute.snapshot.params['id'];
    this.positions$ = this.positionService.fetchFront(this.categoryId)
    this.positions$.subscribe(pos=>{
      this.positionFind = pos
     
    },(error)=>{
      this.router.navigate(['/404'])
    })
    this.categoriesService.getByIdFront(this.categoryId).subscribe(city=>{
      this.titleService.setTitle(`${city.name}, IT-курсы Харьков, Ахтырка, Полтава, Лубны, Изюм, Чугуев, Бахмут, Первомайский, Прилуки, Покровск, обучение ИТ-специалистов 【IT-START】 с нуля. Дизайн, 3d моделирование, Программирование.`);  
    
    })

    this.titleService.setTitle(" ");  
    this.metaTagService.addTags([  
      { name: 'description', content: 'Самые сочные ⚡️ IT-курсы в Харьковe, Ахтырке, Полтаве, Чугуеве, Бахмуте, Лубнах, Покровске, Изюме, Чугуеве ⚡️ ➨ Стань IT-специалистом в школе ❗ IT-START ❗ Дизайн, 3d моделирование, Программирование.' },  
    ]);  

    // let gelicopter = document.getElementById("gl-jn");
    // let gelicopter2 = document.getElementById("gl-sn");
    // let gelicopter3 = document.getElementById("gl-in");
    // document.addEventListener("mousemove",(e)=>{
    //   console.log(gelicopter)
    //   gelicopter.style.transform = `translate3d(${e.clientX/50}px,${e.clientY/50}px,0)`
    //   gelicopter2.style.transform = `translate3d(${e.clientX/50}px,${e.clientY/-50}px,0)`
    //   gelicopter3.style.transform = `translate3d(${e.clientX/-50}px,${e.clientY/50}px,0)`
    // })
  }
 

}
