import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProposalComponent } from './request-proposal.component';

describe('RequestProposalComponent', () => {
  let component: RequestProposalComponent;
  let fixture: ComponentFixture<RequestProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
