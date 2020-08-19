import { TestBed } from '@angular/core/testing';

import { VideoFetchService } from './video-fetch.service';

describe('VideoFetchService', () => {
  let service: VideoFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
