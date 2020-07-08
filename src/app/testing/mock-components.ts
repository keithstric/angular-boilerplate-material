import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import {ConfirmDialogData} from 'src/app/core/interfaces/confirm-dialog-data.interface';

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

/**
 * This component is for the confirm-dialog.stories.ts storybook story to
 * open the confirm-dialog when loaded
 */
@Component({
	selector: 'app-mock-open-dialog',
	template: ``
})
export class MockStorybookOpenDialogComponent implements OnInit {
	@Input() data: ConfirmDialogData = {};

	constructor(
		public dialog: MatDialog
	) {}

	ngOnInit() {
		this.dialog.open(ConfirmDialogComponent, {data: this.data});
	}
}

