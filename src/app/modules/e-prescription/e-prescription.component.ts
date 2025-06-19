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

  constructor(public data: DataService) {}

  get prescriptions() {
    return this.data.prescriptions;
  }

  addPrescription() {
    if (this.newPrescription.patient && this.newPrescription.medication) {
      this.data.prescriptions.push({ ...this.newPrescription });
      this.newPrescription = { patient: '', medication: '' };
    }
  }
}
