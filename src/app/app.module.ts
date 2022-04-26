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
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { DashboardannouncementComponent } from './pages/dashboardannouncement/dashboardannouncement.component';
// import { UpdateannouncementComponent } from './pages/updateannouncement/updateannouncement.component';
// import { ManageannouncementComponent } from './pages/manageannouncement/manageannouncement.component';
// import { AnnouncementComponent } from './pages/announcement/announcement.component';
// import { AddannouncementComponent } from './pages/addannouncement/addannouncement.component';
// import { UpdateroleComponent } from './pages/updaterole/updaterole.component';
// import { UpdateroleComponent } from './pages/updaterole/updaterole.component';
// import { AddroleComponent } from './pages/addrole/addrole.component';
// import { ManagerolesComponent } from './pages/manageroles/manageroles.component';
// import { UpdateuserComponent } from './pages/updateuser/updateuser.component';

import { NgxPaginationModule } from 'ngx-pagination';


import { CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NgxMatTimepickerModule } from "ngx-mat-timepicker";
import { LOCALE_ID } from "@angular/core";

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


import { 
	IgxCheckboxModule,
	IgxSliderModule,
	IgxRadioModule,
	IgxTimePickerModule,
	IgxAccordionModule
 } from "igniteui-angular";
 const lang = "en-US";
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
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
    IgxCheckboxModule,
    IgxSliderModule,
    IgxRadioModule,
    IgxTimePickerModule,
    IgxAccordionModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule,
    NgxMatTimepickerModule.setLocale(lang),
    NgxMaterialTimepickerModule
  ],
  declarations: [
    AppComponent, 
    AdminLayoutComponent, 
    AuthLayoutComponent,
    HomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    // AddproductionComponent,
    // DashboardComponent,
    // DashboardannouncementComponent,
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
    { provide: LOCALE_ID, useValue: lang },

    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
