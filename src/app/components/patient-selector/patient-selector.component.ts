import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PacienteService } from '../../services/paciente.service';
import { Patient } from '../../services/data.service';

@Component({
  selector: 'app-patient-selector',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './patient-selector.component.html',
  styleUrl: './patient-selector.component.css'
})
export class PatientSelectorComponent implements OnInit {
  @Output() selected = new EventEmitter<Patient | null>();
  control = new FormControl('');
  patients: Patient[] = [];
  filtered: Observable<Patient[]> = of([]);

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.pacienteService.getPatients().subscribe(list => {
      this.patients = list;
      this.filtered = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this.filterPatients(value || ''))
      );
    });
  }

  private filterPatients(value: string): Patient[] {
    const filterValue = value.toLowerCase();
    return this.patients.filter(p =>
      p.name.toLowerCase().includes(filterValue) ||
      p.id.toLowerCase().includes(filterValue)
    );
  }

  displayFn(patient: Patient): string {
    return patient ? patient.name : '';
  }

  onOptionSelected(patient: Patient) {
    this.selected.emit(patient);
  }
}
