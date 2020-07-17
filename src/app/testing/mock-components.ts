import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent} from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import {ConfirmDialogData} from 'src/app/core/interfaces/confirm-dialog-data.interface';
import {PageBreadcrumbHeaderComponent} from 'src/app/layout/components/page-breadcrumb-header/page-breadcrumb-header.component';
import {BreadcrumbService} from 'src/app/layout/services/breadcrumb/breadcrumb.service';

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

@Component({
	selector: 'app-page-breadcrumb-header',
		template: `<div class="flex-row page-header">
		<app-breadcrumbs></app-breadcrumbs>
		<span class="spacer"></span>
		<button *ngIf="showAddButton" mat-button (click)="clickAddButton()" type="button">
			<mat-icon>add</mat-icon>
		</button>
	</div>`
})
export class MockStorybookPageBreadcrumbHeaderComponent extends PageBreadcrumbHeaderComponent implements OnInit{

	constructor(
		private _breadcrumbs: BreadcrumbService
	) {
		super();
	}

	ngOnInit() {
		this._breadcrumbs.addBreadcrumb({url: 'http://localhost:4201', title: 'Home'});
		this._breadcrumbs.addBreadcrumb({url: 'http://localhost:4201/page1', title: 'Page1'});
		this._breadcrumbs.addBreadcrumb({url: 'http://localhost:4201/page2', title: 'Page2'});
	}

	/**
	 * If the add button is clicked fires the addButtonClick event
	 * @event {addButtonClick}
	 */
	clickAddButton() {
		this.addButtonClick.emit();
	}
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

/**
 * This component is for capturing a click event on the avatar in the
 * user-avatar.stories.ts storybook story
 */
@Component({
	selector: 'app-mock-avatar',
	template: `
		<p>Click the avatar and see the console for the click message</p>
		<div style="height: 48px; width: 48px;">
			<app-user-avatar (avatarClicked)="onAvatarClicked($event)"></app-user-avatar>
		</div>`
})
export class MockStorybookUserAvatarComponent {

	onAvatarClicked(evt: any) {
		console.log('Avatar Clicked!', evt);
	}
}

