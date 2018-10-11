import { TestBed, inject } from '@angular/core/testing';

import { UsersResolver } from './userRes.service';

describe('ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersResolver]
    });
  });

  it('should be created', inject([UsersResolver], (service: UsersResolver) => {
    expect(service).toBeTruthy();
  }));
});
