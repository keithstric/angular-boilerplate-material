import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {LoadingService} from '../../layout/services/loading/loading.service';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {

  constructor(
    private _loading: LoadingService
  ) { }

  /**
   * When an http request starts, set loading to true. When the request is finished, set loading to false.
   * If an error is thrown be sure loading is set to false. This is for managing the state of a loading spinner.
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loading.setLoading(true, request.url);
    return next.handle(request)
      .pipe(catchError(() => {
        this._loading.setLoading(false, request.url);
        return next.handle(request);
      }))
      .pipe(tap<HttpEvent<any>>((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this._loading.setLoading(false, request.url);
        }
        return evt;
      }));
  }
}
