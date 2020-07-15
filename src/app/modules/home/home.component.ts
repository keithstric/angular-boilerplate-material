import {Component, OnInit} from '@angular/core';
import {UiService} from 'src/app/core/services/ui/ui.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void { }

	onClick() {
		// TypeError
		// (null as any).f();

		// URIError
		// decodeURIComponent('%');

		// Plain'ole Error
		throw new Error('Ooops');
	}

}
