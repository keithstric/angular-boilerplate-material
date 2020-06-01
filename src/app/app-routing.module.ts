import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from 'src/app/core/components/page-not-found/page-not-found.component';
import {AuthGuard} from 'src/app/core/guards/auth.guard';


export const appRoutes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
