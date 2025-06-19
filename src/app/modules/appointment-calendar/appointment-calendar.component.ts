import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Appointment } from '../../services/data.service';

@Component({
  selector: 'app-appointment-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment-calendar.component.html',
  styleUrl: './appointment-calendar.component.css'
})
export class AppointmentCalendarComponent {
  newAppointment: Appointment = { patient: '', date: '' };

  constructor(public data: DataService) {}

  get appointments() {
    return this.data.appointments;
  }

  addAppointment() {
    if (this.newAppointment.patient && this.newAppointment.date) {
      this.data.appointments.push({ ...this.newAppointment });
      this.newAppointment = { patient: '', date: '' };
    }
  }
}
