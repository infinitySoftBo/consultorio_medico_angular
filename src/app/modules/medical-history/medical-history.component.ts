import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, HistoryEntry, Patient } from '../../services/data.service';
import { PatientSelectorComponent } from '../../shared/patient-selector.component';

@Component({
  selector: 'app-medical-history',
  standalone: true,
  imports: [CommonModule, FormsModule, PatientSelectorComponent],
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.css'
})
export class MedicalHistoryComponent {
  newEntry: HistoryEntry = { patient: '', notes: '' };
  editingIndex: number | null = null;
  selectedPatient: Patient | null = null;

  constructor(public data: DataService) {}

  onPatientSelected(patient: Patient) {
    this.selectedPatient = patient;
    this.newEntry.patient = patient.name;
  }

  get entries() {
    return this.data.histories;
  }

  addEntry() {
    if (!this.newEntry.patient || !this.newEntry.notes) {
      return;
    }

    if (this.editingIndex === null) {
      this.data.histories.push({ ...this.newEntry });
    } else {
      this.data.histories[this.editingIndex] = { ...this.newEntry };
      this.editingIndex = null;
    }

    this.newEntry = { patient: '', notes: '' };
  }

  editEntry(i: number) {
    this.editingIndex = i;
    this.newEntry = { ...this.data.histories[i] };
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newEntry = { patient: '', notes: '' };
  }
}
