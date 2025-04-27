import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviStageComponent } from './suivi-stage.component';

describe('SuiviStageComponent', () => {
  let component: SuiviStageComponent;
  let fixture: ComponentFixture<SuiviStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuiviStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
