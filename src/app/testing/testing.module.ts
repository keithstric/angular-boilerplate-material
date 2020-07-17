import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreModule} from 'src/app/core/core.module';
import {
	MockCardComponent,
	MockPageBreadcrumbHeaderComponent,
	MockPageNotFoundComponent,
	MockSiteHeaderComponent,
	MockStorybookOpenDialogComponent,
	MockStorybookPageBreadcrumbHeaderComponent,
	MockStorybookUserAvatarComponent,
} from 'src/app/testing/mock-components';

const components = [
	MockCardComponent,
	MockStorybookOpenDialogComponent,
	MockStorybookPageBreadcrumbHeaderComponent,
	MockPageBreadcrumbHeaderComponent,
	MockPageNotFoundComponent,
	MockSiteHeaderComponent,
	MockStorybookUserAvatarComponent
];

@NgModule({
	declarations: [
		...components
	],
	imports: [
		CommonModule,
		CoreModule
	],
	exports: [
		...components
	]
})
export class TestingModule {
}
