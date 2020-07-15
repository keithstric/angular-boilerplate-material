import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpRequestInterceptor} from 'src/app/core/interceptors/http-request-interceptor.service';
import {AuthService} from 'src/app/core/services/auth/auth.service';
import {ErrorService} from 'src/app/core/services/error/error.service';
import {HttpService} from 'src/app/core/services/http/http.service';
import {LocalStorageService} from 'src/app/core/services/local-storage/local-storage.service';
import {UiService} from 'src/app/core/services/ui/ui.service';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {MaterialModule} from 'src/app/core/modules/material.module';
import {CardComponent} from './components/card/card.component';
import {UserAvatarComponent} from './components/user-avatar/user-avatar.component';

/**
 * Core module
 */
@NgModule({
	declarations: [
		CardComponent,
		ConfirmDialogComponent,
		UserAvatarComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
		MaterialModule
	],
	exports: [
		CardComponent,
		MaterialModule,
		UserAvatarComponent
	],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
		{provide: ErrorHandler, useClass: ErrorService},
		AuthService,
		ErrorService,
		HttpService,
		LocalStorageService,
		UiService
	]
})
export class CoreModule { }
