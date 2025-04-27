import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantEncadresComponent } from './etudiant-encadres.component';

describe('EtudiantEncadresComponent', () => {
  let component: EtudiantEncadresComponent;
  let fixture: ComponentFixture<EtudiantEncadresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantEncadresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantEncadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
