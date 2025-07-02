import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreformationComponent } from './offreformation.component';

describe('OffreformationComponent', () => {
  let component: OffreformationComponent;
  let fixture: ComponentFixture<OffreformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffreformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffreformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
