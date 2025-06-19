import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

interface KPI {
  label: string;
  value: number;
}

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements OnInit {
  constructor(private data: DataService) {}

  get patients() {
    return this.data.patients;
  }

  get appointments() {
    return this.data.appointments;
  }

  get inventory() {
    return this.data.inventory;
  }

  get kpis(): KPI[] {
    return [
      { label: 'Pacientes registrados', value: this.data.patients.length },
      { label: 'Citas programadas', value: this.data.appointments.length },
      { label: 'Pagos recibidos', value: this.data.payments.reduce((t,p)=>t+p.amount,0) },
    ];
  }

  get maxValue(): number {
    return Math.max(...this.kpis.map(k => k.value), 0);
  }

  ngOnInit() {}
}
