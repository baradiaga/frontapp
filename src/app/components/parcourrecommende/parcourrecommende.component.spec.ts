import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcourrecommendeComponent } from './parcourrecommende.component';

describe('ParcourrecommendeComponent', () => {
  let component: ParcourrecommendeComponent;
  let fixture: ComponentFixture<ParcourrecommendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParcourrecommendeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParcourrecommendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
