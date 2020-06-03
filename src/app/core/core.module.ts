import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpLoadingInterceptor} from 'src/app/core/interceptors/http-loading.interceptor';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {MaterialModule} from './modules/material/material.module';
import { CardComponent } from './components/card/card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';



@NgModule({
  declarations: [
    CardComponent,
    ConfirmDialogComponent,
    PageNotFoundComponent,
    UserAvatarComponent
  ],
  exports: [
    CardComponent,
    MaterialModule,
    UserAvatarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpLoadingInterceptor, multi: true}
  ]
})
export class CoreModule { }
