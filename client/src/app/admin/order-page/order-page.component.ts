import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MaterialInstance, MaterialService } from '../shared/classes/material.service';
import { Category } from '../shared/interfaces';
import { CategoriesService } from '../shared/services/categories.service';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('modal') modalRef:ElementRef
  isRoot:boolean
  modal: MaterialInstance
  catName:Observable<Category[]>
  constructor(private router:Router,
    private categoriesService:CategoriesService, 
     private order:OrderService 
    ) { }

  ngOnInit(): void {
    this.isRoot = this.router.url === '/admin/order'
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.isRoot = this.router.url === '/admin/order'
      }
    })
  }
  ngOnDestroy(){
    this.modal.destroy()
  }
  ngAfterViewInit(){
    this.modal = MaterialService.initModal(this.modalRef)
  }

  open(){
    this.modal.open()
  }

  close(){
    this.modal.close()
  }

  submit(){
    this.modal.close()
  }

}
