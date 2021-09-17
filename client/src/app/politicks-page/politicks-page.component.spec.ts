import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticksPageComponent } from './politicks-page.component';

describe('PoliticksPageComponent', () => {
  let component: PoliticksPageComponent;
  let fixture: ComponentFixture<PoliticksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticksPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
