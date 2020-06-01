import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {MaterialModule} from './modules/material/material.module';
import { CardComponent } from './components/card/card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    CardComponent,
    ConfirmDialogComponent,
    PageNotFoundComponent
  ],
  exports: [
    CardComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class CoreModule { }
