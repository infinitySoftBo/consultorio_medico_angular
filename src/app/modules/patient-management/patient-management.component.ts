import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Patient {
  name: string;
  age: number;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-patient-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-management.component.html',
  styleUrl: './patient-management.component.css'
})
export class PatientManagementComponent {
  patients: Patient[] = [];
  newPatient: Patient = { name: '', age: 0, phone: '', email: '' };

  addPatient() {
    if (this.newPatient.name.trim()) {
      this.patients.push({ ...this.newPatient });
      this.newPatient = { name: '', age: 0, phone: '', email: '' };
    }
  }
}
