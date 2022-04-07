import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { ManageUser } from "../../pages/manage/manageuser.component";
// import { EmployeeCreateComponent } from "../../pages/manage/employee-create.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EdituserComponent } from "src/app/pages/edituser/edituser.component";
import { UpdateuserComponent } from "src/app/pages/updateuser/updateuser.component";
// import { ManageUser } from "src/app/pages/manage/manageuser.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    ManageUser,
    // EmployeeCreateComponent,
    EdituserComponent,
    UpdateuserComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
