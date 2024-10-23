import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAnnonceComponent } from './recherche-annonce.component';

describe('RechercheAnnonceComponent', () => {
  let component: RechercheAnnonceComponent;
  let fixture: ComponentFixture<RechercheAnnonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheAnnonceComponent]
    });
    fixture = TestBed.createComponent(RechercheAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
