import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CoreModule} from 'src/app/core/core.module';
import { SiteHeaderComponent } from 'src/app/layout/components/site-header/site-header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { PageBreadcrumbHeaderComponent } from './components/page-breadcrumb-header/page-breadcrumb-header.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  declarations: [
    SiteHeaderComponent,
    BreadcrumbsComponent,
    PageBreadcrumbHeaderComponent
  ],
  exports: [
    SiteHeaderComponent,
    BreadcrumbsComponent,
    PageBreadcrumbHeaderComponent
  ]
})
export class LayoutModule { }
