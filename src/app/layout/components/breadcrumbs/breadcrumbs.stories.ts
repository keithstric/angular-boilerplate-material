import {withKnobs} from '@storybook/addon-knobs';
import {moduleMetadata} from '@storybook/angular';
import {MaterialModule} from 'src/app/core/modules/material.module';
import {BreadcrumbsComponent} from 'src/app/layout/components/breadcrumbs/breadcrumbs.component';

// @ts-ignore
import breadcrumbNotes from './README.md';

export default {
	title: 'app-breadcrumbs',
	decorators: [
		moduleMetadata({
			imports: [MaterialModule],
			declarations: [BreadcrumbsComponent]
		}),
		withKnobs
	],
	parameters: {
		notes: {markdown: breadcrumbNotes},
		backgrounds: [
			{name: 'primary', value: '#f5f5f5', default: true}
		]
	}
};

export const baseBreadcrumbs = () => ({
	component: BreadcrumbsComponent
});
