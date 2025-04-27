import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureActionComponent } from './candidature-action.component';

describe('CandidatureActionComponent', () => {
  let component: CandidatureActionComponent;
  let fixture: ComponentFixture<CandidatureActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatureActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatureActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
