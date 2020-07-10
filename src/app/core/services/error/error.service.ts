import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject, throwError} from 'rxjs';
import {UiService} from 'src/app/core/services/ui/ui.service';
import {LoadingService} from 'src/app/layout/services/loading/loading.service';

/**
 * This service is for surfacing errors in the UI. By default, we'll notify the user with a snackbar (toast) message.
 * You should only need to include this service if you need to surface errors in the ui or need to notify the user
 * of errors.
 */
@Injectable({
	providedIn: 'root'
})
export class ErrorService {
	public errorEvent: Subject<Error> = new Subject<any>();

	constructor(
		private _ui: UiService
	) {
	}

	/**
	 * Create a snackbar notification
	 * @param {number} notificationCode - An error code or Http Status
	 * @param {string} notification - The notification message
	 */
	notifyUser(notificationCode: number, notification: string) {
		this._ui.notifyUserShowSnackbar(`${notificationCode}: ${notification}`, 5000);
	}

	/**
	 * Will notify the user and update the errorEvent Subject
	 * @param {number} errorCode
	 * @param {string} message
	 * @param {Error} err
	 */
	handleError(errorCode: number, message: string, err: Error) {
		this.notifyUser(errorCode, err.message);
		this.errorEvent.next(err);
		return throwError(err);
	}

	/**
	 * Handle a response error: notify the user and update the errorEvent Subject
	 * @param err
	 * @returns {Observable<Error>}
	 */
	handleResponseError(err: HttpErrorResponse) {
		this.notifyUser(err.status, err.message);
		this.errorEvent.next(err.error);
		return throwError(err);
	}
}
