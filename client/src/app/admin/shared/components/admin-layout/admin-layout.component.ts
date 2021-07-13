import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  links= [
    {url:"/admin/owerview",name:"Oбзор" },
    {url:"/admin/analytics",name:"Аналитика" },
    {url:"/admin/history",name:"История заказов" },
    {url:"/admin/person",name:"Заявки на пробный урок" },
    {url:"/admin/order",name:"Добавить заказ" },
    {url:"/admin/categories",name:"Города IT START" }
  ]
  constructor(private router: Router,
              private auth:AuthService
    ) { }

  ngOnInit(): void {
  }

  logout(event:Event){
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/admin/login'])
  }
  
}
