import { Routes } from '@angular/router';
import { RequestFormComponent } from './demanderRattrapage/demanderRattrapage.component'; // Import the Request Form component
import { ProfModifierSeanceComponent } from './prof-modifier-seance/prof-modifier-seance.component'; // Import the Request Form component
import { NotificationsProfComponent } from './notifications-prof/notifications-prof.component';
import { NotificationsAdminComponent } from './notifications-admin/notifications-admin.component';
import { HistoriqueNotifsAdminComponent } from './historique-notifs-admin/historique-notifs-admin.component';
import { NotificationsStudentComponent } from './notifications-student/notifications-student.component';
import { NotificationsHeaderComponent } from './notifications-header/notifications-header.component';

import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: 'request-form', component: RequestFormComponent },
  { path: 'notifications-prof', component: NotificationsProfComponent },
  { path: 'prof-modifier-seance', component: ProfModifierSeanceComponent },
  { path: 'notifications-admin', component: NotificationsAdminComponent },
  { path: 'historique-notifs-admin', component: HistoriqueNotifsAdminComponent },
  { path: 'notifications-student', component: NotificationsStudentComponent },
  { path: 'notifications-header', component: NotificationsHeaderComponent },
];
