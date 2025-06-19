import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface HistoryEntry {
  patient: string;
  notes: string;
}

@Component({
  selector: 'app-medical-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.css'
})
export class MedicalHistoryComponent {
  entries: HistoryEntry[] = [];
  newEntry: HistoryEntry = { patient: '', notes: '' };

  addEntry() {
    if (this.newEntry.patient && this.newEntry.notes) {
      this.entries.push({ ...this.newEntry });
      this.newEntry = { patient: '', notes: '' };
    }
  }
}
