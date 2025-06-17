import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcourchoisiComponent } from './parcourchoisi.component';

describe('ParcourchoisiComponent', () => {
  let component: ParcourchoisiComponent;
  let fixture: ComponentFixture<ParcourchoisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParcourchoisiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParcourchoisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
