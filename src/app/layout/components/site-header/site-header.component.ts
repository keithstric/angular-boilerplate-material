import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {ApiEndpoints, ApiMethod} from 'src/app/core/interfaces/api.interface';
import {LocalStorageTypes} from 'src/app/core/interfaces/local-storage.interface';
import {AuthService} from 'src/app/core/services/auth/auth.service';
import {HttpService} from 'src/app/core/services/http/http.service';
import {LocalStorageService} from 'src/app/core/services/local-storage/local-storage.service';
import {HeaderService} from 'src/app/layout/services/header/header.service';
import {PROJECT_NAME} from 'src/environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './site-header.component.html',
	styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit, OnDestroy {
	title: string;
	titleSub: Subscription;
	user: any;
	userSub: Subscription;

	constructor(
		private _header: HeaderService,
		private _storage: LocalStorageService,
		private _router: Router,
		private _http: HttpService,
		private _auth: AuthService
	) {	}

	ngOnInit(): void {
		this.listenToTitle();
		this.listenToAuth();
	}

	ngOnDestroy() {
		this.titleSub.unsubscribe();
		this.userSub.unsubscribe();
	}

	private listenToTitle() {
		this.titleSub = this._header.currentHeaderTitleSub.subscribe((headerTitle: string) => {
			this.title = headerTitle;
		});
	}

	private listenToAuth() {
		this.userSub = this._auth.authData.subscribe((user) => {
			this.user = user;
		});
	}

	logout() {
		this._auth.logout()
			.subscribe((args) => {
				this._router.navigateByUrl('/auth/login');
			});
	}
}
