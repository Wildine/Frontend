import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureApplyComponent } from './candidature-apply.component';

describe('CandidatureApplyComponent', () => {
  let component: CandidatureApplyComponent;
  let fixture: ComponentFixture<CandidatureApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatureApplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatureApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
