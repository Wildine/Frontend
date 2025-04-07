import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiApplyComponent } from './emploi-apply.component';

describe('EmploiApplyComponent', () => {
  let component: EmploiApplyComponent;
  let fixture: ComponentFixture<EmploiApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploiApplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploiApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
