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
  newPatient: Patient = { name: '', age: 0, phone: '', email: '' };

  constructor(public data: DataService) {}

  get patients() {
    return this.data.patients;
  }

  addPatient() {
    if (this.newPatient.name.trim()) {
      this.data.patients.push({ ...this.newPatient });
      this.newPatient = { name: '', age: 0, phone: '', email: '' };
    }
  }
}
