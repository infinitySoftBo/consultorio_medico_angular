import { Injectable } from '@angular/core';

export interface Patient { name: string; age: number; phone: string; email: string; }
export interface Appointment { patient: string; date: string; }
export interface HistoryEntry { patient: string; notes: string; }
export interface Prescription { patient: string; medication: string; }
export interface Payment { patient: string; amount: number; }
export interface InventoryItem { name: string; qty: number; }

@Injectable({ providedIn: 'root' })
export class DataService {
  patients: Patient[] = [
    { name: 'Juan Perez', age: 30, phone: '123456', email: 'juan@example.com' },
    { name: 'Maria Gomez', age: 25, phone: '234567', email: 'maria@example.com' },
    { name: 'Carlos Ruiz', age: 40, phone: '345678', email: 'carlos@example.com' },
  ];

  appointments: Appointment[] = [
    { patient: 'Juan Perez', date: '2025-06-01' },
    { patient: 'Maria Gomez', date: '2025-06-02' },
  ];

  histories: HistoryEntry[] = [
    { patient: 'Juan Perez', notes: 'Diabetes control' },
    { patient: 'Carlos Ruiz', notes: 'Chequeo general' },
  ];

  prescriptions: Prescription[] = [
    { patient: 'Maria Gomez', medication: 'Paracetamol 500mg' },
  ];

  payments: Payment[] = [
    { patient: 'Juan Perez', amount: 100 },
    { patient: 'Maria Gomez', amount: 150 },
  ];

  inventory: InventoryItem[] = [
    { name: 'Paracetamol', qty: 20 },
    { name: 'Guantes', qty: 100 },
    { name: 'Jeringas', qty: 50 },
  ];
}
