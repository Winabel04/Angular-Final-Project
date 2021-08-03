import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { AssignComponent } from './components/admin/components/assign/assign.component';
import { WatchComponent } from './components/admin/components/watch/watch.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { HandyManComponent } from './components/handy-man/handy-man.component';
import { HandyManInfoComponent } from './components/handy-man/components/handy-man-info/handy-man-info.component';
import { WorkComponent } from './components/handy-man/components/work/work.component';
import { HandyManHistoryComponent } from './components/handy-man/components/handy-man-history/handy-man-history.component';
import { LodgeComponent } from './components/tenant/components/lodge/lodge.component';
import { TenantInfoComponent } from './components/tenant/components/tenant-info/tenant-info.component';
import { TenantHistoryComponent } from './components/tenant/components/tenant-history/tenant-history.component';
import { AdminHistoryComponent } from './components/admin/components/admin-history/admin-history.component';
import { AdminInfoComponent } from './components/admin/components/admin-info/admin-info.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    AdminComponent,
    AssignComponent,
    WatchComponent,
    TenantComponent,
    HandyManComponent,
    HandyManInfoComponent,
    WorkComponent,
    HandyManHistoryComponent,
    LodgeComponent,
    TenantInfoComponent,
    TenantHistoryComponent,
    AdminHistoryComponent,
    AdminInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
