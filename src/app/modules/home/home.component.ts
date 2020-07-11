import {Component, OnInit} from '@angular/core';
import {UiService} from 'src/app/core/services/ui/ui.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(
		private _ui: UiService
	) { }

	ngOnInit(): void { }

	/**
	 * Show an OS notification
	 */
	async showNotification() {
		const notifyObj = await this._ui.showOsNotification('This is a title', 'This is the body', null, [{action: 'Action', title: 'Action'}]);
		console.log(notifyObj);
	}

}
