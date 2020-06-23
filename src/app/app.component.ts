import {Component, OnInit} from '@angular/core';
import {delay} from 'rxjs/operators';
import {LoadingService} from 'src/app/layout/services/loading/loading.service';
import {PROJECT_NAME} from 'src/environments/environment';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = PROJECT_NAME;
	loading: boolean = false;

	constructor(
		private _loading: LoadingService
	) {
	}

	ngOnInit() {
		this.listenToLoading();
	}

	/**
	 * Listen to the loading service's loadingSub and
	 * toggle visibility of the spinner
	 */
	listenToLoading() {
		this._loading.loadingSub
			.pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
			.subscribe((loading) => {
				this.loading = loading;
			});
	}
}
