import {Component, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SiteHeaderComponent} from 'src/app/layout/components/site-header/site-header.component';
import {PROJECT_NAME} from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HeaderService {
	private headerSource = new BehaviorSubject<any>(SiteHeaderComponent);
	/**
	 * Observable for updating the site header
	 * @type {Observable}
	 */
	headerComponent = this.headerSource.asObservable();

	constructor() {
	}

	/**
	 * Change the site header
	 * @param component {Component}
	 */
	setHeader(component: any) {
		this.headerSource.next(component);
	}
}
