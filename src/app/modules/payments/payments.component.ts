import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Payment {
  patient: string;
  amount: number;
}

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  payments: Payment[] = [];
  newPayment: Payment = { patient: '', amount: 0 };

  addPayment() {
    if (this.newPayment.patient && this.newPayment.amount > 0) {
      this.payments.push({ ...this.newPayment });
      this.newPayment = { patient: '', amount: 0 };
    }
  }
}
