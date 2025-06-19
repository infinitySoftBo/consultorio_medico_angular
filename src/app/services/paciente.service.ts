import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService, Patient } from './data.service';

@Injectable({ providedIn: 'root' })
export class PacienteService {
  private patientsSubject: BehaviorSubject<Patient[]>;

  constructor(private data: DataService) {
    this.patientsSubject = new BehaviorSubject(this.data.patients);
  }

  getPatients(): Observable<Patient[]> {
    return this.patientsSubject.asObservable();
  }

  add(patient: Patient) {
    this.data.patients.push(patient);
    this.patientsSubject.next(this.data.patients);
  }

  update(index: number, patient: Patient) {
    this.data.patients[index] = patient;
    this.patientsSubject.next(this.data.patients);
  }

  remove(index: number) {
    this.data.patients.splice(index, 1);
    this.patientsSubject.next(this.data.patients);
  }
}
