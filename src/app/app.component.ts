import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {delay} from 'rxjs/operators';
import {SiteHeaderComponent} from 'src/app/layout/components/site-header/site-header.component';
import {HeaderService} from 'src/app/layout/services/header/header.service';
import {LoadingService} from 'src/app/layout/services/loading/loading.service';
import {PROJECT_NAME} from 'src/environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	title = PROJECT_NAME;
	loading: boolean = false;
	headerComponent: any;
	subscriptions: Subscription = new Subscription();

	constructor(
		private _loading: LoadingService,
		private _header: HeaderService,
		private _cdr: ChangeDetectorRef
	) {
	}

	ngOnInit() {
		this.listenToHeader();
		this.listenToLoading();
		this._header.setHeader(SiteHeaderComponent);
	}

	ngOnDestroy() {
		this.subscriptions.unsubscribe();
	}

	/**
	 * Listen to changes of the header and update the header component
	 */
	listenToHeader() {
		this.subscriptions.add(this._header.headerComponent.subscribe((header: Component) => {
			this.headerComponent = header;
			this._cdr.detectChanges();
		}));
	}

	/**
	 * Listen to the loading service's loadingSub and
	 * toggle visibility of the spinner
	 */
	listenToLoading() {
		this.subscriptions.add(this._loading.loadingSub
			.pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
			.subscribe((loading) => {
				this.loading = loading;
			}));
	}
}
