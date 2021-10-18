import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './service/route-guard.service';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  { path: '', component: LoginComponent },//canActive, RouteGuardServie
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashComponent, canActivate:[RouteGuardService] },
  //{ path: '**', pathMatch: 'full', redirectTo: 'dash'},
  { path: '**', component: ErrorComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
