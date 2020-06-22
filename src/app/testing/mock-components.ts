import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'app-card',
	template: '<p>Mock app-card</p>'
})
export class MockCardComponent {
	@Input() cardTitle: string = 'Card Title';
	@Input() cardSubTitle: string = 'Card Sub-Title';
}

@Component({
	selector: 'app-page-breadcrumb-header',
	template: '<p>Mock page-breadcrumb-header</p>'
})
export class MockPageBreadcrumbHeaderComponent {
	@Input() showAddButton: boolean = false;
	@Output() addButtonClick: EventEmitter<any> = new EventEmitter<any>();
}

@Component({
	selector: 'app-header',
	template: '<p>Mock site-header</p>'
})
export class MockSiteHeaderComponent {
}

@Component({
	selector: 'app-not-found',
	template: '<p>Mock page not found</p>'
})
export class MockPageNotFoundComponent {
}

