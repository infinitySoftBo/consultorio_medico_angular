import { Routes } from '@angular/router';

import { PatientManagementComponent } from './modules/patient-management/patient-management.component';
import { AppointmentCalendarComponent } from './modules/appointment-calendar/appointment-calendar.component';
import { MedicalHistoryComponent } from './modules/medical-history/medical-history.component';
import { EPrescriptionComponent } from './modules/e-prescription/e-prescription.component';
import { PaymentsComponent } from './modules/payments/payments.component';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { ReportsComponent } from './modules/reports/reports.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patients', component: PatientManagementComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: AppointmentCalendarComponent, canActivate: [AuthGuard] },
  { path: 'history', component: MedicalHistoryComponent, canActivate: [AuthGuard] },
  { path: 'prescriptions', component: EPrescriptionComponent, canActivate: [AuthGuard] },
  { path: 'payments', component: PaymentsComponent, canActivate: [AuthGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];
