import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from 'src/app/core/core.module';
import {AuthService} from 'src/app/core/services/auth/auth.service';
import {ServiceLocator} from 'src/app/core/services/service-locator';
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
	providers: [AuthService],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private _injector: Injector) {
		ServiceLocator.injector = _injector;
	}
}
