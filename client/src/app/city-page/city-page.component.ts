import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MaterialService } from '../admin/shared/classes/material.service';
import { Position } from '../admin/shared/interfaces';
import { CategoriesService } from '../admin/shared/services/categories.service';
import { PositionService } from '../admin/shared/services/position.service';

@Component({
  selector: 'app-city-page',
  templateUrl: './city-page.component.html',
  styleUrls: ['./city-page.component.css']
})
export class CityPageComponent implements OnInit{
  isNew = false
  positions$: Observable<Position[]>
  categoryId
  positionFind = []
  constructor(private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router,
    private positionService: PositionService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const body = document.getElementById("app-main")
    body.classList.add("ov");
    
    //города
    this.categoryId = this.activateRoute.snapshot.params['id'];
    console.log(this.categoryId)
    this.positions$ = this.positionService.fetchFront(this.categoryId)
    this.positions$.subscribe(pos=>{
      this.positionFind = pos
    })
    // //проверка на левый url
    // this.route.params
    //   .pipe(
    //     switchMap(
    //       (params: Params) => {//проверка редактирование или создание
    //         if (params['id']) {
    //           this.isNew = true
    //           return this.categoriesService.getByIdFront(params['id'])
    //         }
    //         return of(null)
    //       }
    //     )
    //   ).subscribe(
    //     category => {//если редартирование то в инпут название категории
    //       if (category) {
    //         this.positionService.fetchFront(this.categoryId).subscribe(position => {
    //           this.positionFind = position
    //           if (this.positionFind.length == 0) {
    //             this.router.navigate(['/404'])
    //           }
    //         })
    //       }

    //     },
    //     error => this.router.navigate(['/404'])
    //   )
  

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
