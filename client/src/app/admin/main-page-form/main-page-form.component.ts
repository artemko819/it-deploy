import { Component, OnInit } from '@angular/core';
import { MainFormService } from '../shared/services/main.service';
@Component({
  selector: 'app-main-page-form',
  templateUrl: './main-page-form.component.html',
  styleUrls: ['./main-page-form.component.css']
})
export class MainPageFormComponent implements OnInit {
  consults:any;
  constructor(private mainFormService:MainFormService) { }

  ngOnInit(): void {
    this.mainFormService.fetch().subscribe(person=>{
      this.consults = person
    })
    
  }

}
