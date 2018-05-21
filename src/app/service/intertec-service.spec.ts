/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IntertecServiceService } from './intertec-service.service';

describe('IntertecServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntertecServiceService]
    });
  });

  it('should ...', inject([IntertecServiceService], (service: IntertecServiceService) => {
    expect(service).toBeTruthy();
  }));
});
