import { TestBed, inject } from '@angular/core/testing';
import { ServicesModule } from '../services.module';
import { EventService } from './event.service';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServicesModule],
      providers: []
    });
  });

  it('should be created', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));
});
