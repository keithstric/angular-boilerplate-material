import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	MockCardComponent,
	MockPageBreadcrumbHeaderComponent,
	MockPageNotFoundComponent,
	MockSiteHeaderComponent,
	MockStorybookOpenDialogComponent,
	MockStorybookPageBreadcrumbHeaderComponent,
} from 'src/app/testing/mock-components';

const components = [
	MockCardComponent,
	MockStorybookOpenDialogComponent,
	MockStorybookPageBreadcrumbHeaderComponent,
	MockPageBreadcrumbHeaderComponent,
	MockPageNotFoundComponent,
	MockSiteHeaderComponent
];

@NgModule({
	declarations: [
		...components
	],
	imports: [
		CommonModule
	],
	exports: [
		...components
	]
})
export class TestingModule {
}
