import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Position } from '../../shared/interfaces';
import { OrderService } from '../../shared/services/order.service';
import { PositionService } from '../../shared/services/position.service';

@Component({
  selector: 'app-order-positions',
  templateUrl: './order-positions.component.html',
  styleUrls: ['./order-positions.component.css']
})
export class OrderPositionsComponent implements OnInit {
  positions$:Observable<Position[]>
  constructor(private route:ActivatedRoute,
              private positionService:PositionService,
              private order:OrderService
    ) { }

  ngOnInit(): void {
   this.positions$ = this.route.params
      .pipe(
        switchMap(
          (params:Params)=>{
            return this.positionService.fetch(params['id'])
          }
        ),
        map(//add default quntity to input 
          (positons:Position[])=>{
            return positons.map(positon =>{
              positon.quantity = 1
              return positon
            })
          }
        )
      )
  }
  addToOrder(position:Position){
    console.log(position)
    this.order.add(position)
  }

}
