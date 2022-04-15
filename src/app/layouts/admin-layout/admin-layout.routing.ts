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

import { ManagerolesComponent } from "../../pages/manageroles/manageroles.component";

import { AddroleComponent } from "../../pages/addrole/addrole.component";

import { UpdateroleComponent } from "../../pages/updaterole/updaterole.component";
import { AddannouncementComponent } from "../../pages/addannouncement/addannouncement.component";
import { ManageannouncementComponent } from "../../pages/manageannouncement/manageannouncement.component";
import { UpdateannouncementComponent } from "../../pages/updateannouncement/updateannouncement.component";

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
  { path: "managerole", component: ManagerolesComponent },
  { path: "addrole", component: AddroleComponent },
  { path: "editrole/:id", component: UpdateroleComponent },
  { path: "addannouncement", component: AddannouncementComponent },
  { path: "manageannouncement", component: ManageannouncementComponent },
  { path: "editannouncement/:id", component: UpdateannouncementComponent },
  
  
  // { path: "rtl", component: RtlComponent }
];
