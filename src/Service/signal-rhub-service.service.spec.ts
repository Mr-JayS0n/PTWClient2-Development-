import { TestBed } from '@angular/core/testing';

import { SignalRHubServiceService } from './signal-rhub-service.service';

describe('SignalRHubServiceService', () => {
  let service: SignalRHubServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalRHubServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
