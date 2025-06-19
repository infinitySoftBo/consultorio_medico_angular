import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Patient } from '../services/data.service';

@Component({
  selector: 'app-patient-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-selector.component.html',
  styleUrl: './patient-selector.component.css'
})
export class PatientSelectorComponent {
  @Input() placeholder = 'Paciente';
  @Output() select = new EventEmitter<Patient>();

  query = '';
  suggestions: Patient[] = [];

  constructor(private data: DataService) {}

  onInput() {
    const term = this.query.toLowerCase();
    this.suggestions = this.data.patients.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.id.toLowerCase().includes(term)
    );
  }

  choose(patient: Patient) {
    this.query = `${patient.name}`;
    this.suggestions = [];
    this.select.emit(patient);
  }
}
