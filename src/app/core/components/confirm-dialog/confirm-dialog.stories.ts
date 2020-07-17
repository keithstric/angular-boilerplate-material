import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata} from '@storybook/angular';
import {ConfirmDialogComponent} from 'src/app/core/components/confirm-dialog/confirm-dialog.component';
import {MaterialModule} from 'src/app/core/modules/material.module';
import {MockStorybookOpenDialogComponent} from 'src/app/testing/mock-components';

// @ts-ignore
import confirmDialogNotes from './README.md';

export default {
	title: 'confirm-dialog',
	decorators: [
		moduleMetadata({
			imports: [
				MaterialModule,
				BrowserAnimationsModule
			],
			declarations: [
				MockStorybookOpenDialogComponent,
				ConfirmDialogComponent
			],
			entryComponents: [ConfirmDialogComponent]
		}),
		withKnobs
	],
	parameters: {
		notes: {markdown: confirmDialogNotes},
		backgrounds: [
			{name: 'primary', value: '#f5f5f5', default: true}
		]
	}
};

export const baseConfirmDialog = () => ({
	component: MockStorybookOpenDialogComponent
});

export const confirmDialogWithTitle = () => ({
	component: MockStorybookOpenDialogComponent,
	props: {
		data: {title: 'Custom Title'}
	}
});

export const confirmDialogWithTitleAndMessage = () => ({
	component: MockStorybookOpenDialogComponent,
	props: {
		data: {
			title: 'Custom Title',
			message: 'This is a custom message'
		}
	}
});

export const confirmDialogNoCancelButton = () => ({
	component: MockStorybookOpenDialogComponent,
	props: {
		data: {
			title: 'Custom Title',
			message: 'This is a custom message',
			noCancelButton: true
		}
	}
});

export const confirmDialogCustomActionNames = () => ({
	component: MockStorybookOpenDialogComponent,
	props: {
		data: {
			cancelButtonText: 'Custom Cancel',
			confirmButtonText: 'Custom Confirm'
		}
	}
})


