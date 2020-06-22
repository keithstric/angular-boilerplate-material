import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {ApiEndpoints, ApiMethod} from 'src/app/core/interfaces/api.interface';
import {ErrorService} from 'src/app/core/services//error/error.service';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(
		private _http: HttpClient,
		private _error: ErrorService,
		private _router: Router
	) {
	}

	requestCall(api: ApiEndpoints | string, method: ApiMethod, data?: any) {
		// console.log('HttpService.requestCall, api=', api);
		let response;
		switch (method) {
			case ApiMethod.GET:
				response = this._http.get(api)
					.pipe(catchError((err) => this.handleError(err, this)));
				break;
			case ApiMethod.DELETE:
				response = this._http.delete(api)
					.pipe(catchError((err) => this.handleError(err, this)));
				break;
			case ApiMethod.PATCH:
				response = this._http.patch(api, data)
					.pipe(catchError((err) => this.handleError(err, this)));
				break;
			case ApiMethod.POST:
				response = this._http.post(api, data)
					.pipe(catchError((err) => this.handleError(err, this)));
				break;
			case ApiMethod.PUT:
				response = this._http.put(api, data)
					.pipe(catchError((err) => this.handleError(err, this)));
				break;
		}
		return response;
	}

	handleError(error: HttpErrorResponse, self: HttpService) {
		if (error.error instanceof ErrorEvent) {
			console.error(`An error occurred: ${error.error.message}`);
		} else {
			if (error.status === 401) {
				this._router.navigateByUrl('/auth/login');
			}
			return this._error.handleError(error.status, error.error.message, error.error);
		}
	}
}
