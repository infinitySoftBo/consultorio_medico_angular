import { Injectable } from '@angular/core';
import { Appointment, Patient } from './data.service';

@Injectable({ providedIn: 'root' })
export class ReminderService {
  sendReminder(patient: Patient, appointment: Appointment) {
    console.log(
      `Recordatorio enviado a ${patient.name} para ${appointment.date} a las ${appointment.time}`
    );
  }
}
