import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, HistoryEntry, Patient } from '../../services/data.service';
import { PatientSelectorComponent } from '../../components/patient-selector/patient-selector.component';

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

  get entries() {
    return this.data.histories;
  }

  addEntry() {
    if (!this.selectedPatient || !this.newEntry.notes) {
      return;
    }

    this.newEntry.patient = this.selectedPatient.name;

    if (this.editingIndex === null) {
      this.data.histories.push({ ...this.newEntry });
    } else {
      this.data.histories[this.editingIndex] = { ...this.newEntry };
      this.editingIndex = null;
    }

    this.newEntry = { patient: '', notes: '' };
    this.selectedPatient = null;
  }

  editEntry(i: number) {
    this.editingIndex = i;
    this.newEntry = { ...this.data.histories[i] };
    const name = this.newEntry.patient;
    this.selectedPatient = this.data.patients.find(p => p.name === name) || null;
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newEntry = { patient: '', notes: '' };
    this.selectedPatient = null;
  }
}
