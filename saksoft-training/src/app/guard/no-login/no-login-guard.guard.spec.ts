import { TestBed } from '@angular/core/testing';

import { NoLoginGuardGuard } from './no-login-guard.guard';

describe('NoLoginGuardGuard', () => {
  let guard: NoLoginGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoLoginGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
