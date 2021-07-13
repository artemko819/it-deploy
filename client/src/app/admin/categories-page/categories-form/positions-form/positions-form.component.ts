import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { MaterialInstance, MaterialService } from 'src/app/admin/shared/classes/material.service';
import { Position } from 'src/app/admin/shared/interfaces';
import { PositionService } from 'src/app/admin/shared/services/position.service';

@Component({
  selector: 'app-positions-form',
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.css']
})
export class PositionsFormComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('categoryId') categoryId: string //peredaem categorii
  @ViewChild('modal') moladRef: ElementRef
  positions: Position[] = []
  loading = false
  positonId = null
  modal: MaterialInstance
  form: FormGroup

  constructor(private positionService: PositionService) { }

  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.moladRef)
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      cost: new FormControl(1, [Validators.required, Validators.min(1)])
    })

    this.loading = true
    this.positionService.fetch(this.categoryId).subscribe(positions => {
      this.positions = positions
      this.loading = false
    })//poluchaem pozicii po id categorii
  }

  ngOnDestroy() {
    this.modal.destroy()
  }

  onSelectPosition(positon: Position) {
    this.positonId = positon._id
    this.form.patchValue({
      name: positon.name,
      cost: positon.cost
    })
    this.modal.open()
    MaterialService.updateTextInput()
  }
  onDeletePosition(event:Event,positon: Position) {
    event.stopPropagation()
    const decision = window.confirm(`Удалить позицию "${positon.name}" ?`)
    if(decision){
      this.positionService.delete(positon).subscribe(
        response=>{
          const idx = this.positions.findIndex(p=> p._id === positon._id)
          this.positions.splice(idx,1)
          MaterialService.toast(response.message)
        },
        error=>{
          MaterialService.toast(error.error.message)
        }
      )
    }
  }
  onAddPosition() {
    this.positonId = null
    this.form.patchValue({
      name: null,
      cost: 1
    })
    this.modal.open()
    MaterialService.updateTextInput()
  }
  closeModal() {
    this.modal.close()
  }


  onSubmit() {
    this.form.disable()
    const newPositon: Position = {
      name: this.form.value.name,
      cost: this.form.value.cost,
      category: this.categoryId
    }
    
    const completed =  () => {
      this.modal.close()
      this.form.reset({ name: '', cost: 1 })
      this.form.enable()
    }
    if (this.positonId) {
      newPositon._id = this.positonId
      this.positionService.update(newPositon).subscribe(
        position => {
          const idx = this.positions.findIndex(p=>p._id === position._id)
          this.positions[idx] = position
          MaterialService.toast("Изменения сохранены")
        },
        error => {
          MaterialService.toast(error.error.message)
        },
       completed
      )
    } else {

      this.positionService.create(newPositon).subscribe(
        position => {
          MaterialService.toast("Курс добавлен")
          this.positions.push(position)
        },
        error => {
          MaterialService.toast(error.error.message)
        },
        completed
      )
    }
  }


}
