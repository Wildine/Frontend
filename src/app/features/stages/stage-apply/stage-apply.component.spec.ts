import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageApplyComponent } from './stage-apply.component';

describe('StageApplyComponent', () => {
  let component: StageApplyComponent;
  let fixture: ComponentFixture<StageApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageApplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
