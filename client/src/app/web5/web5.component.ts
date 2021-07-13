import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../admin/shared/interfaces';
import { CategoriesService } from '../admin/shared/services/categories.service';
import { PositionService } from '../admin/shared/services/position.service';

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
    private positionService:PositionService
    ) { }

  ngOnInit(): void {
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
