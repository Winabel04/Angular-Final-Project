import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHistoryComponent } from './components/admin/admin-history/admin-history.component';
import { AdminInfoComponent } from './components/admin/admin-info/admin-info.component';
import { AssignComponent } from './components/admin/assign/assign.component';

import { WatchComponent } from './components/admin/watch/watch.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { LodgeComponent } from './components/tenant/lodge/lodge.component';
import { TenantInfoComponent } from './components/tenant/tenant-info/tenant-info.component';
import { TenantComponent } from './components/tenant/tenant.component';

const routes: Routes = [
    { path: 'landingPage', component: LandingPageComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'assign', component: AssignComponent, pathMatch: 'full' },
    { path: 'watch', component: WatchComponent, pathMatch: 'full' },
    { path: 'logout', component: LandingPageComponent, pathMatch: 'full' },
    { path: 'adminInfo', component: AdminInfoComponent, pathMatch: 'full' },
    { path: 'adminHistory', component: AdminHistoryComponent, pathMatch: 'full' },
    { path: 'lodge', component: LodgeComponent, pathMatch: 'full' },
    { path: 'tenantInfo', component: TenantInfoComponent, pathMatch: 'full' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
