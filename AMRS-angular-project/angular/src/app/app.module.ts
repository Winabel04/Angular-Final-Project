import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { AssignComponent } from './components/admin/assign/assign.component';
import { WatchComponent } from './components/admin/watch/watch.component';
import { TenantComponent } from './components/tenant/tenant.component';
import { HandyManComponent } from './components/handy-man/handy-man.component';
import { HandyManInfoComponent } from './components/handy-man/handy-man-info/handy-man-info.component';
import { WorkComponent } from './components/handy-man/work/work.component';
import { HandyManHistoryComponent } from './components/handy-man/handy-man-history/handy-man-history.component';
import { LodgeComponent } from './components/tenant/lodge/lodge.component';
import { TenantInfoComponent } from './components/tenant/tenant-info/tenant-info.component';
import { TenantHistoryComponent } from './components/tenant/tenant-history/tenant-history.component';
import { AdminInfoComponent } from './components/admin/admin-info/admin-info.component';
import { AdminSideBarComponent } from './components/admin/admin-side-bar/admin-side-bar.component';
import { TenantSideBarComponent } from './components/tenant/tenant-side-bar/tenant-side-bar.component';
import { HandyManSideNavComponent } from './../app/components/handy-man/handy-man-side-nav/handy-man-side-nav.component';
import { AdminChangeInfoComponent } from './components/admin/admin-info/admin-change-info/admin-change-info.component';
import { TenantChangeInfoComponent } from './components/tenant/tenant-info/tenant-change-info/tenant-change-info.component';
import { HandyManChangeInfoComponent } from './components/handy-man/handy-man-info/handy-man-change-info/handy-man-change-info.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';



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
    AdminInfoComponent,
    AdminSideBarComponent,
    TenantSideBarComponent,
    HandyManSideNavComponent,
    AdminChangeInfoComponent,
    TenantChangeInfoComponent,
    HandyManChangeInfoComponent,
    RegisterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
