import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('ResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
