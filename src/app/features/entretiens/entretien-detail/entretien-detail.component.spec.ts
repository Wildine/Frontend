import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretienDetailComponent } from './entretien-detail.component';

describe('EntretienDetailComponent', () => {
  let component: EntretienDetailComponent;
  let fixture: ComponentFixture<EntretienDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntretienDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntretienDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
