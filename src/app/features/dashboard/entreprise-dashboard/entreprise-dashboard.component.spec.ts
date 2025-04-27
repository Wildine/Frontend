import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseDashboardComponent } from './entreprise-dashboard.component';

describe('EntrepriseDashboardComponent', () => {
  let component: EntrepriseDashboardComponent;
  let fixture: ComponentFixture<EntrepriseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrepriseDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepriseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
