import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Appointment {
  patient: string;
  date: string;
}

@Component({
  selector: 'app-appointment-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment-calendar.component.html',
  styleUrl: './appointment-calendar.component.css'
})
export class AppointmentCalendarComponent {
  appointments: Appointment[] = [];
  newAppointment: Appointment = { patient: '', date: '' };

  addAppointment() {
    if (this.newAppointment.patient && this.newAppointment.date) {
      this.appointments.push({ ...this.newAppointment });
      this.newAppointment = { patient: '', date: '' };
    }
  }
}
