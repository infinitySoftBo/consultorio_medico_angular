import { Injectable } from '@angular/core';

export interface Patient { name: string; age: number; phone: string; email: string; }
export interface Appointment { patient: string; date: string; }
export interface HistoryEntry { patient: string; notes: string; }
export interface Prescription { patient: string; medication: string; }
export interface Payment { patient: string; amount: number; }
export interface InventoryItem { name: string; qty: number; }

@Injectable({ providedIn: 'root' })
export class DataService {
  patients: Patient[] = [];
  appointments: Appointment[] = [];
  histories: HistoryEntry[] = [];
  prescriptions: Prescription[] = [];
  payments: Payment[] = [];
  inventory: InventoryItem[] = [];
}
