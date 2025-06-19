import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Patient } from '../../services/data.service';

@Component({
  selector: 'app-patient-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-management.component.html',
  styleUrl: './patient-management.component.css'
})
export class PatientManagementComponent {
  newPatient: Patient = { id: '', name: '', age: 0, phone: '', email: '' };
  editingIndex: number | null = null;

  constructor(public data: DataService) {}

  get patients() {
    return this.data.patients;
  }

  addPatient() {
    if (!this.newPatient.name.trim()) {
      return;
    }

    if (this.editingIndex === null) {
      this.data.patients.push({ ...this.newPatient });
    } else {
      this.data.patients[this.editingIndex] = { ...this.newPatient };
      this.editingIndex = null;
    }

    this.newPatient = { id: '', name: '', age: 0, phone: '', email: '' };
  }

  editPatient(i: number) {
    this.editingIndex = i;
    this.newPatient = { ...this.data.patients[i] };
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newPatient = { id: '', name: '', age: 0, phone: '', email: '' };
  }
}
