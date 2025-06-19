import { Routes } from '@angular/router';

import { PatientManagementComponent } from './modules/patient-management/patient-management.component';
import { AppointmentCalendarComponent } from './modules/appointment-calendar/appointment-calendar.component';
import { MedicalHistoryComponent } from './modules/medical-history/medical-history.component';
import { EPrescriptionComponent } from './modules/e-prescription/e-prescription.component';
import { PaymentsComponent } from './modules/payments/payments.component';
import { InventoryComponent } from './modules/inventory/inventory.component';
import { ReportsComponent } from './modules/reports/reports.component';

export const routes: Routes = [
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
  { path: 'patients', component: PatientManagementComponent },
  { path: 'calendar', component: AppointmentCalendarComponent },
  { path: 'history', component: MedicalHistoryComponent },
  { path: 'prescriptions', component: EPrescriptionComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'reports', component: ReportsComponent },
];
