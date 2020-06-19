import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {PageNotFoundComponent} from 'src/app/core/components/page-not-found/page-not-found.component';
import {AuthGuard} from 'src/app/core/guards/auth.guard';
import {AuthModule} from 'src/app/modules/auth/auth.module';
import {HomeComponent} from 'src/app/modules/home/home.component';

/**
 * This defines the application's routes. All base routes should be lazy loaded.
 * @type {Routes}
 */
export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  // {path: '', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
