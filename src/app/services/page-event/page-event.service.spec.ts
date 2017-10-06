import { TestBed, inject } from '@angular/core/testing';

import { PageEventService } from './page-event.service';

describe('PageEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageEventService]
    });
  });

  it('should be created', inject([PageEventService], (service: PageEventService) => {
    expect(service).toBeTruthy();
  }));
});
