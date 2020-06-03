import { TestBed } from '@angular/core/testing';

import { HttpLoadingInterceptor } from 'src/app/core/interceptors/http-loading.interceptor';

describe('HttpRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpLoadingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpLoadingInterceptor = TestBed.inject(HttpLoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
