import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChangeInfoComponent } from './components/admin/admin-info/admin-change-info/admin-change-info.component';
import { AdminInfoComponent } from './components/admin/admin-info/admin-info.component';
import { AssignComponent } from './components/admin/assign/assign.component';

import { WatchComponent } from './components/admin/watch/watch.component';
import { HandyManHistoryComponent } from './components/handy-man/handy-man-history/handy-man-history.component';
import { HandyManChangeInfoComponent } from './components/handy-man/handy-man-info/handy-man-change-info/handy-man-change-info.component';
import { HandyManInfoComponent } from './components/handy-man/handy-man-info/handy-man-info.component';
import { WorkComponent } from './components/handy-man/work/work.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LodgeComponent } from './components/tenant/lodge/lodge.component';
import { TenantHistoryComponent } from './components/tenant/tenant-history/tenant-history.component';
import { TenantChangeInfoComponent } from './components/tenant/tenant-info/tenant-change-info/tenant-change-info.component';
import { TenantInfoComponent } from './components/tenant/tenant-info/tenant-info.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { RouteService } from './services/route.service';


const credential = window.localStorage.getItem('credential')

const routes: Routes = [

    { path: 'landingPage', component: LandingPageComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },


    // for admin routing
    { path: 'assign', component: AssignComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'admin'}},
    { path: 'watch', component: WatchComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'admin'}},
    { path: 'adminInfo', component: AdminInfoComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'admin'} },
    { path: 'adminChangeInfo', component: AdminChangeInfoComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'admin'} },
   

    // for tenant routing
    { path: 'lodge', component: LodgeComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'tenant'} },
    { path: 'tenantInfo', component: TenantInfoComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'tenant'} },
    { path: 'tenantHistory', component: TenantHistoryComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'tenant'} },
    { path: 'tenantChangeInfo', component: TenantChangeInfoComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'tenant'} },

    // for handyman routing
    { path: 'work', component: WorkComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'handyman'} },
    { path: 'handymanInfo', component: HandyManInfoComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'handyman'} },
    { path: 'handymanHistory', component: HandyManHistoryComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'handyman'} },
    { path: 'handymanChangeInfo', component: HandyManChangeInfoComponent, pathMatch: 'full',  canActivate: [RouteService], data: {role: 'handyman'} },

    {path: '', redirectTo: 'landingPage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
