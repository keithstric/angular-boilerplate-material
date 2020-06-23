import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PROJECT_NAME} from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HeaderService {
	currentHeaderTitleSub: BehaviorSubject<string> = new BehaviorSubject(PROJECT_NAME);

	constructor() {
	}

	/**
	 * Update the current title with a new one
	 * @param newTitle
	 */
	updateHeaderTitle(newTitle: string) {
		const newHeader = newTitle || PROJECT_NAME;
		this.currentHeaderTitleSub.next(newHeader);
	}
}
