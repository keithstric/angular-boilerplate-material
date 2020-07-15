import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
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

	/**
	 * Make an http request
	 * @param api {ApiEndpoints | string}
	 * @param method {ApiMethod}
	 * @param data {any}
	 * @returns {Observable<any>}
	 */
	requestCall(api: ApiEndpoints | string, method: ApiMethod, data?: any) {
		// console.log('HttpService.requestCall, api=', api);
		let response: Observable<any>;
		let reqObservable: Observable<any>;
		switch (method) {
			case ApiMethod.GET:
				reqObservable = this._http.get(api);
				break;
			case ApiMethod.DELETE:
				reqObservable = this._http.delete(api);
				break;
			case ApiMethod.PATCH:
				reqObservable = this._http.patch(api, data);
				break;
			case ApiMethod.POST:
				reqObservable = this._http.post(api, data);
				break;
			case ApiMethod.PUT:
				reqObservable = this._http.put(api, data);
				break;
		}
		response = reqObservable
			.pipe(catchError((err) => this.handleError(err, this)));
		return response;
	}

	/**
	 * Handle any errors that occur during the request
	 * @param error {HttpErrorResponse}
	 * @param self {HttpService}
	 * @returns {Observable<never>}
	 */
	handleError(error: HttpErrorResponse, self: HttpService) {
		if (error.error instanceof ErrorEvent) {
			console.error(`An error occurred: ${error.error.message}`);
		} else {
			if (error.status === 401) {
				this._router.navigateByUrl('/auth/login');
			}
			return this._error.handleRequestError(error.status, error.error.message, error.error);
		}
	}
}
