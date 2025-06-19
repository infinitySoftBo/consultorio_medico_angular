import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
export class ReportsComponent {
  kpis: KPI[] = [
    { label: 'Pacientes registrados', value: 0 },
    { label: 'Citas programadas', value: 0 },
    { label: 'Pagos recibidos', value: 0 },
  ];
}
