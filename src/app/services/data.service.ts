import { Injectable } from '@angular/core';

export interface Patient {
  id: string;
  name: string;
  age: number;
  phone: string;
  email: string;
  history: string;
}
export interface Appointment {
  patient: string;
  date: string;
  time: string;
}
export interface HistoryEntry {
  patient: string;
  diagnosis: string;
  notes: string;
}
export interface Prescription {
  patient: string;
  medication: string;
  dosage: string;
}
export interface Payment {
  patient: string;
  amount: number;
  receipt: string;
}
export interface InventoryItem {
  name: string;
  qty: number;
  category: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  patients: Patient[] = [
    { id: 'P001', name: 'Juan Perez', age: 30, phone: '123456', email: 'juan@example.com', history: 'Hipertensión' },
    { id: 'P002', name: 'Maria Gomez', age: 25, phone: '234567', email: 'maria@example.com', history: 'Alergia a penicilina' },
    { id: 'P003', name: 'Carlos Ruiz', age: 40, phone: '345678', email: 'carlos@example.com', history: 'Chequeo anual' },
  ];

  appointments: Appointment[] = [
    { patient: 'Juan Perez', date: '2025-06-01', time: '09:00' },
    { patient: 'Maria Gomez', date: '2025-06-02', time: '11:30' },
    { patient: 'Carlos Ruiz', date: '2025-06-02', time: '15:00' },
    { patient: 'Maria Gomez', date: '2025-06-05', time: '10:15' },
  ];

  histories: HistoryEntry[] = [
    { patient: 'Juan Perez', diagnosis: 'Diabetes', notes: 'Control trimestral' },
    { patient: 'Carlos Ruiz', diagnosis: 'General', notes: 'Chequeo anual' },
  ];

  prescriptions: Prescription[] = [
    { patient: 'Maria Gomez', medication: 'Paracetamol', dosage: '500mg cada 8h' },
  ];

  payments: Payment[] = [
    { patient: 'Juan Perez', amount: 100, receipt: 'R001' },
    { patient: 'Maria Gomez', amount: 150, receipt: 'R002' },
  ];

  inventory: InventoryItem[] = [
    { name: 'Paracetamol', qty: 20, category: 'Medicamento' },
    { name: 'Guantes', qty: 100, category: 'Insumo' },
    { name: 'Jeringas', qty: 50, category: 'Insumo' },
  ];
}
