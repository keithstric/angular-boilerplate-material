import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarDismiss, MatSnackBarRef} from '@angular/material/snack-bar';
import {SwPush} from '@angular/service-worker';

enum NotificationPermissions {
	GRANTED = 'granted',
	DENIED = 'denied',
	DEFAULT = 'default'
}

@Injectable({
	providedIn: 'root'
})
export class UiService {
	snackbarRef: MatSnackBarRef<any>;
	snackbarConfig: MatSnackBarConfig = {
		horizontalPosition: 'center',
		verticalPosition: 'bottom'
	};
	notificationMap: Map<number, Notification> = new Map();

	constructor(
		private _snackbar: MatSnackBar,
		private swPush: SwPush
	) {
	}

	notifyUserShowSnackbar(msg: string, duration?: number, action?: string, actionFn?: (...args) => void) {
		duration = duration ? duration : 3000;
		action = action || 'dismiss';
		this.snackbarRef = this._snackbar.open(msg, action, {...this.snackbarConfig, duration});
		this.snackbarRef.afterDismissed().subscribe((matSnackbarDismissedEvt: MatSnackBarDismiss) => {
		});
		this.snackbarRef.onAction().subscribe(() => {
			if (actionFn) {
				actionFn();
			}
		});
	}

	async checkOSNotificationPermissions() {
		if (!('Notification' in window)) {
			throw new Error('Notifications are not supported');
		} else {
			return await Notification.requestPermission() as NotificationPermissions;
		}
	}

	async showOsNotification(title: string, body: string, icon?: string, actions?: NotificationAction[]) {
		let notificationPermission = NotificationPermissions.DEFAULT;
		try {
			notificationPermission = await this.checkOSNotificationPermissions();
		} catch (err) {
			console.error(err);
		}
		if (notificationPermission === NotificationPermissions.GRANTED && title && body) {
			const timestamp = new Date().getTime();
			const swReg = await navigator.serviceWorker.getRegistration();
			if (swReg) {
				await swReg.showNotification(title, {body, icon, actions});
			}
			// const notification = new Notification(title, {icon, body});
			// console.log('notification=', notification);
			// this.notificationMap.set(timestamp, notification);
			// return {timestamp, notification: swNotification};
		}
	}


}
