import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Appointment, Patient } from '../../services/data.service';
import { ReminderService } from '../../services/reminder.service';
import { PatientSelectorComponent } from '../../shared/patient-selector.component';

@Component({
  selector: 'app-appointment-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule, PatientSelectorComponent],
  templateUrl: './appointment-calendar.component.html',
  styleUrl: './appointment-calendar.component.css'
})
export class AppointmentCalendarComponent {
  newAppointment: Appointment = { patient: '', date: '', time: '' };
  editingIndex: number | null = null;
  selectedPatient: Patient | null = null;

  currentMonth = new Date();
  selectedDate: string | null = null;

  constructor(public data: DataService, private reminders: ReminderService) {}

  onPatientSelected(patient: Patient) {
    this.selectedPatient = patient;
    this.newAppointment.patient = patient.name;
  }

  get appointments() {
    return this.data.appointments;
  }

  get days(): number[] {
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const last = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: last }, (_, i) => i + 1);
  }

  changeMonth(offset: number) {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + offset,
      1
    );
    this.selectedDate = null;
  }

  appointmentsForDay(day: number) {
    const month = this.currentMonth.getMonth() + 1;
    const year = this.currentMonth.getFullYear();
    const date = `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`;
    return this.appointments.filter(a => a.date === date);
  }

  selectDay(day: number) {
    const month = this.currentMonth.getMonth() + 1;
    const year = this.currentMonth.getFullYear();
    this.selectedDate = `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`;
  }

  addAppointment() {
    if (!this.newAppointment.patient || !this.newAppointment.date || !this.newAppointment.time) {
      return;
    }

    if (this.editingIndex === null) {
      this.data.appointments.push({ ...this.newAppointment });
    } else {
      this.data.appointments[this.editingIndex] = { ...this.newAppointment };
      this.editingIndex = null;
    }
    if (this.selectedPatient) {
      this.reminders.sendReminder(this.selectedPatient, this.newAppointment);
    }

    this.newAppointment = { patient: '', date: '', time: '' };
  }

  editAppointment(i: number) {
    this.editingIndex = i;
    this.newAppointment = { ...this.data.appointments[i] };
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newAppointment = { patient: '', date: '', time: '' };
  }
}
