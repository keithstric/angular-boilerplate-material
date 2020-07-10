import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from 'src/app/core/services/auth/auth.service';

/**
 * A user avatar component
 * @class {UserAvatarComponent}
 */
@Component({
	selector: 'app-user-avatar',
	templateUrl: './user-avatar.component.html',
	styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit, OnDestroy {
	user: any;
	subscriptions: Subscription = new Subscription();
	initials: string;

	constructor(
		private _auth: AuthService
	) {
	}

	ngOnInit(): void {
		this.subscriptions.add(this._auth.authData.subscribe((user) => {
			this.user = user;
			this.initials = this._auth.getUserInitials();
		}));
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}

}
