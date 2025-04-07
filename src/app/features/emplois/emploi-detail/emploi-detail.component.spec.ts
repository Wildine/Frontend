import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiDetailComponent } from './emploi-detail.component';

describe('EmploiDetailComponent', () => {
  let component: EmploiDetailComponent;
  let fixture: ComponentFixture<EmploiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploiDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
