import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, HistoryEntry } from '../../services/data.service';

@Component({
  selector: 'app-medical-history',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.css'
})
export class MedicalHistoryComponent {
  newEntry: HistoryEntry = { patient: '', notes: '' };

  constructor(public data: DataService) {}

  get entries() {
    return this.data.histories;
  }

  addEntry() {
    if (this.newEntry.patient && this.newEntry.notes) {
      this.data.histories.push({ ...this.newEntry });
      this.newEntry = { patient: '', notes: '' };
    }
  }
}
