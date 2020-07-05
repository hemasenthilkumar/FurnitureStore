import { TestBed } from '@angular/core/testing';

import { LoginWsService } from './login-ws.service';

describe('LoginWsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginWsService = TestBed.get(LoginWsService);
    expect(service).toBeTruthy();
  });
});
