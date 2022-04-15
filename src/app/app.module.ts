import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardannouncementComponent } from './pages/dashboardannouncement/dashboardannouncement.component';
// import { UpdateannouncementComponent } from './pages/updateannouncement/updateannouncement.component';
// import { ManageannouncementComponent } from './pages/manageannouncement/manageannouncement.component';
// import { AnnouncementComponent } from './pages/announcement/announcement.component';
// import { AddannouncementComponent } from './pages/addannouncement/addannouncement.component';
// import { UpdateroleComponent } from './pages/updaterole/updaterole.component';
// import { UpdateroleComponent } from './pages/updaterole/updaterole.component';
// import { AddroleComponent } from './pages/addrole/addrole.component';
// import { ManagerolesComponent } from './pages/manageroles/manageroles.component';
// import { UpdateuserComponent } from './pages/updateuser/updateuser.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    // NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  declarations: [
    AppComponent, 
    AdminLayoutComponent, 
    AuthLayoutComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardannouncementComponent,
    // UpdateannouncementComponent,
    // ManageannouncementComponent,
    // AnnouncementComponent,
    // AddannouncementComponent,
    // UpdateroleComponent,
    // UpdateroleComponent,
    // AddroleComponent,
    // ManagerolesComponent,
  ],
  // providers: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule {}
