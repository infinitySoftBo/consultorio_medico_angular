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
  editingIndex: number | null = null;

  constructor(public data: DataService) {}

  get appointments() {
    return this.data.appointments;
  }

  addAppointment() {
    if (!this.newAppointment.patient || !this.newAppointment.date) {
      return;
    }

    if (this.editingIndex === null) {
      this.data.appointments.push({ ...this.newAppointment });
    } else {
      this.data.appointments[this.editingIndex] = { ...this.newAppointment };
      this.editingIndex = null;
    }

    this.newAppointment = { patient: '', date: '' };
  }

  editAppointment(i: number) {
    this.editingIndex = i;
    this.newAppointment = { ...this.data.appointments[i] };
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newAppointment = { patient: '', date: '' };
  }
}
