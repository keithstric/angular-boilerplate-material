import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from 'src/app/core/core.module';
import {LayoutModule} from 'src/app/layout/layout.module';
import {HomeModule} from 'src/app/modules/home/home.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

/**
 * The AppModule
 */
@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		CoreModule,
		HomeModule,
		LayoutModule,
		ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
