import { TestBed } from '@angular/core/testing';

import { EmailVService } from './email-v.service';

describe('EmailVService', () => {
  let service: EmailVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
