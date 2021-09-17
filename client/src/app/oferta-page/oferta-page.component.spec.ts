import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaPageComponent } from './oferta-page.component';

describe('OfertaPageComponent', () => {
  let component: OfertaPageComponent;
  let fixture: ComponentFixture<OfertaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
