import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, Payment } from '../../services/data.service';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  newPayment: Payment = { patient: '', amount: 0 };
  editingIndex: number | null = null;

  constructor(public data: DataService) {}

  get payments() {
    return this.data.payments;
  }

  addPayment() {
    if (!this.newPayment.patient || this.newPayment.amount <= 0) {
      return;
    }

    if (this.editingIndex === null) {
      this.data.payments.push({ ...this.newPayment });
    } else {
      this.data.payments[this.editingIndex] = { ...this.newPayment };
      this.editingIndex = null;
    }

    this.newPayment = { patient: '', amount: 0 };
  }

  editPayment(i: number) {
    this.editingIndex = i;
    this.newPayment = { ...this.data.payments[i] };
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newPayment = { patient: '', amount: 0 };
  }
}
