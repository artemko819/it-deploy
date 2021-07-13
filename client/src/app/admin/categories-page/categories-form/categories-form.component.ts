import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MaterialService } from '../../shared/classes/material.service';
import { Category,Message } from '../../shared/interfaces';
import { CategoriesService } from '../../shared/services/categories.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {
  @ViewChild('input') inputRef:ElementRef //получаем инпут в переменную
  form:FormGroup
  isNew =true
  image: File
  imagePreview= ''
  category:Category
  constructor(private route:ActivatedRoute,
              private categoriesService:CategoriesService,
              private router:Router
    ) { }
  
  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    })

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params:Params)=>{//проверка редактирование или создание
            if(params['id']){
              this.isNew = false
              return this.categoriesService.getById(params['id'])
            }
           return of(null)
          }
        )
      )
      .subscribe(
          category=>{//если редартирование то в инпут название категории
            if(category){
              this.category = category
              this.form.patchValue({//задаем значения инпута  
                name: category.name
              })
              this.imagePreview = category.imageSrc//картинка
              MaterialService.updateTextInput()
            }
            this.form.enable()
          },
          error => MaterialService.toast(error.error.message)
      )
  }
  triggerClick(){
    this.inputRef.nativeElement.click()//создаем события клика при загрузке картинки
  }
  onFileUpload(e:any){
    const file = e.target.files[0];//first element img
    this.image  = file
    const reader = new FileReader()

    reader.onload = ()=>{
      this.imagePreview = reader.result as string;
    }

    reader.readAsDataURL(file)
  } 
  deleteCategory(){//удаления
    let obs$:Observable<any>
    const decition = window.confirm(`Выуверены что хотите удалить город ${this.category.name}`)
    if(decition){
       obs$= this.categoriesService.delete(this.category._id)
        obs$.subscribe(
          response=> MaterialService.toast(response.message),
          error=>MaterialService.toast(error.error.message),
          ()=>{
            this.router.navigate(['/admin/categories'])
          }
        )
    }
  }
  onSubmit(){
    let obs$:Observable<any>
    this.form.disable()
    if(this.isNew){
        //create
        obs$ = this.categoriesService.create(this.form.value.name,this.image)
    }else{
      //update
      obs$ = this.categoriesService.update(this.category._id,this.form.value.name,this.image)
    }
    obs$.subscribe(
      category =>{
        this.category = category
        MaterialService.toast('Изменения сохранены')
        this.form.enable()
      },
      err =>{
        MaterialService.toast(err.error.message)
        this.form.enable()
      }
    )
  }

}
