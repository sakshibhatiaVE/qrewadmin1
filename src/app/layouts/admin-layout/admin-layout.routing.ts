import { Routes } from "@angular/router";

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
import { EdituserComponent } from "../../pages/edituser/edituser.component";

import { UpdateuserComponent } from "../../pages/updateuser/updateuser.component";


export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "manageuser", component: ManageUser },
  { path: "adduser", component: EdituserComponent },
  { path: "edituser/:id", component: UpdateuserComponent },
  
  
  // { path: "rtl", component: RtlComponent }
];