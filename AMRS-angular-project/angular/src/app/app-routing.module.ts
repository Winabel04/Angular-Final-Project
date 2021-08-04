import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHistoryComponent } from './components/admin/admin-history/admin-history.component';
import { AdminChangeInfoComponent } from './components/admin/admin-info/admin-change-info/admin-change-info.component';
import { AdminInfoComponent } from './components/admin/admin-info/admin-info.component';
import { AssignComponent } from './components/admin/assign/assign.component';

import { WatchComponent } from './components/admin/watch/watch.component';
import { HandyManHistoryComponent } from './components/handy-man/handy-man-history/handy-man-history.component';
import { HandyManInfoComponent } from './components/handy-man/handy-man-info/handy-man-info.component';
import { WorkComponent } from './components/handy-man/work/work.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { LodgeComponent } from './components/tenant/lodge/lodge.component';
import { TenantHistoryComponent } from './components/tenant/tenant-history/tenant-history.component';
import { TenantInfoComponent } from './components/tenant/tenant-info/tenant-info.component';
import { TenantComponent } from './components/tenant/tenant.component';

const routes: Routes = [

    { path: 'landingPage', component: LandingPageComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'logout', component: LandingPageComponent, pathMatch: 'full' },

    // for admin routing
    { path: 'assign', component: AssignComponent, pathMatch: 'full' },
    { path: 'watch', component: WatchComponent, pathMatch: 'full' },
    { path: 'adminInfo', component: AdminInfoComponent, pathMatch: 'full' },
    { path: 'adminHistory', component: AdminHistoryComponent, pathMatch: 'full'},
    { path: 'adminChangeInfo', component: AdminChangeInfoComponent, pathMatch: 'full' },
   

    // for tenant routing
    { path: 'lodge', component: LodgeComponent, pathMatch: 'full' },
    { path: 'tenantInfo', component: TenantInfoComponent, pathMatch: 'full' },
    { path: 'tenantHistory', component: TenantHistoryComponent, pathMatch: 'full' },

    // for handyman routing
    { path: 'work', component: WorkComponent, pathMatch: 'full' },
    { path: 'handymanInfo', component: HandyManInfoComponent, pathMatch: 'full' },
    { path: 'handymanHistory', component: HandyManHistoryComponent, pathMatch: 'full' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
