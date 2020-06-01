import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MockCardComponent,
  MockPageBreadcrumbHeaderComponent,
  MockPageNotFoundComponent,
  MockSiteHeaderComponent
} from 'src/app/testing/mock-components';

const components = [
  MockCardComponent,
  MockPageBreadcrumbHeaderComponent,
  MockPageNotFoundComponent,
  MockSiteHeaderComponent
]

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
export class TestingModule { }
