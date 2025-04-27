import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercheurDashboardComponent } from './chercheur-dashboard.component';

describe('ChercheurDashboardComponent', () => {
  let component: ChercheurDashboardComponent;
  let fixture: ComponentFixture<ChercheurDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChercheurDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChercheurDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
