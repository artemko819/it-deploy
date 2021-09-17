import { Component, OnInit } from '@angular/core';
import { AnketaService } from '../shared/services/anketa.service';

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.css']
})
export class AnalyticsPageComponent implements OnInit {
  ankets;
  constructor( private anketaService: AnketaService) { }

  ngOnInit(): void {
    this.anketaService.fetch().subscribe(person=>{
      this.ankets = person
    })
  }

  

}
