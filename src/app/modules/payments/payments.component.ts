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

  constructor(public data: DataService) {}

  get payments() {
    return this.data.payments;
  }

  addPayment() {
    if (this.newPayment.patient && this.newPayment.amount > 0) {
      this.data.payments.push({ ...this.newPayment });
      this.newPayment = { patient: '', amount: 0 };
    }
  }
}
