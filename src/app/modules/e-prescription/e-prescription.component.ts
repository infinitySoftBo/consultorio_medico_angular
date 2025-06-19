import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Prescription {
  patient: string;
  medication: string;
}

@Component({
  selector: 'app-e-prescription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './e-prescription.component.html',
  styleUrl: './e-prescription.component.css'
})
export class EPrescriptionComponent {
  prescriptions: Prescription[] = [];
  newPrescription: Prescription = { patient: '', medication: '' };

  addPrescription() {
    if (this.newPrescription.patient && this.newPrescription.medication) {
      this.prescriptions.push({ ...this.newPrescription });
      this.newPrescription = { patient: '', medication: '' };
    }
  }
}
