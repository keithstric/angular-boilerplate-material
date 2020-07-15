import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CoreModule} from 'src/app/core/core.module';
import {PageNotFoundComponent} from 'src/app/layout/components/page-not-found/page-not-found.component';
import {SiteHeaderComponent} from 'src/app/layout/components/site-header/site-header.component';
import {BreadcrumbService} from 'src/app/layout/services/breadcrumb/breadcrumb.service';
import {HeaderService} from 'src/app/layout/services/header/header.service';
import {LoadingService} from 'src/app/layout/services/loading/loading.service';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {PageBreadcrumbHeaderComponent} from './components/page-breadcrumb-header/page-breadcrumb-header.component';

const components = [
	SiteHeaderComponent,
	BreadcrumbsComponent,
	PageBreadcrumbHeaderComponent,
	PageNotFoundComponent
];

/**
 * The LayoutModule
 */
@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		RouterModule
	],
	declarations: [
		...components
	],
	exports: [
		...components
	],
	providers: [
		BreadcrumbService,
		HeaderService,
		LoadingService
	],
	entryComponents: [
		SiteHeaderComponent
	]
})
export class LayoutModule {
}
