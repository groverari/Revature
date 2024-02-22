import { TestBed } from '@angular/core/testing';

import { MockHeroService } from './mock-hero.service';

describe('MockHeroService', () => {
  let service: MockHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
