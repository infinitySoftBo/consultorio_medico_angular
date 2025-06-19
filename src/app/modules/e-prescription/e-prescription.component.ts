import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Prescription, Patient } from '../../services/data.service';
import { PatientSelectorComponent } from '../../components/patient-selector/patient-selector.component';

@Component({
  selector: 'app-e-prescription',
  standalone: true,
  imports: [CommonModule, FormsModule, PatientSelectorComponent],
  templateUrl: './e-prescription.component.html',
  styleUrl: './e-prescription.component.css'
})
export class EPrescriptionComponent {
  newPrescription: Prescription = { patient: '', medication: '' };
  editingIndex: number | null = null;
  selectedPatient: Patient | null = null;

  constructor(public data: DataService) {}

  get prescriptions() {
    return this.data.prescriptions;
  }

  addPrescription() {
    if (!this.selectedPatient || !this.newPrescription.medication) {
      return;
    }

    this.newPrescription.patient = this.selectedPatient.name;

    if (this.editingIndex === null) {
      this.data.prescriptions.push({ ...this.newPrescription });
    } else {
      this.data.prescriptions[this.editingIndex] = { ...this.newPrescription };
      this.editingIndex = null;
    }

    this.newPrescription = { patient: '', medication: '' };
    this.selectedPatient = null;
  }

  editPrescription(i: number) {
    this.editingIndex = i;
    this.newPrescription = { ...this.data.prescriptions[i] };
    const name = this.newPrescription.patient;
    this.selectedPatient = this.data.patients.find(p => p.name === name) || null;
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newPrescription = { patient: '', medication: '' };
    this.selectedPatient = null;
  }
}
