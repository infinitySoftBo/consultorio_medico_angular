import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Prescription } from '../../services/data.service';

@Component({
  selector: 'app-e-prescription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './e-prescription.component.html',
  styleUrl: './e-prescription.component.css'
})
export class EPrescriptionComponent {
  newPrescription: Prescription = { patient: '', medication: '' };
  editingIndex: number | null = null;

  constructor(public data: DataService) {}

  get prescriptions() {
    return this.data.prescriptions;
  }

  addPrescription() {
    if (!this.newPrescription.patient || !this.newPrescription.medication) {
      return;
    }

    if (this.editingIndex === null) {
      this.data.prescriptions.push({ ...this.newPrescription });
    } else {
      this.data.prescriptions[this.editingIndex] = { ...this.newPrescription };
      this.editingIndex = null;
    }

    this.newPrescription = { patient: '', medication: '' };
  }

  editPrescription(i: number) {
    this.editingIndex = i;
    this.newPrescription = { ...this.data.prescriptions[i] };
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newPrescription = { patient: '', medication: '' };
  }
}
