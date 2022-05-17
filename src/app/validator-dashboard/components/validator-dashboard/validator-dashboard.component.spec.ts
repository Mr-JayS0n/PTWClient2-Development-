import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorDashboardComponent } from './validator-dashboard.component';

describe('ValidatorDashboardComponent', () => {
  let component: ValidatorDashboardComponent;
  let fixture: ComponentFixture<ValidatorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
