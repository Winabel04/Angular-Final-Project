import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignComponent } from './components/admin/components/assign/assign.component';

import { WatchComponent } from './components/admin/components/watch/watch.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'landingPage', component: LandingPageComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'assign', component: AssignComponent, pathMatch: 'full' },
    { path: 'watch', component: WatchComponent, pathMatch: 'full' },
    { path: 'logout', component: LandingPageComponent, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
