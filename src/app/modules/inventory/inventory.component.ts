import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService, InventoryItem } from '../../services/data.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  newItem: InventoryItem = { name: '', qty: 0 };

  constructor(public data: DataService) {}

  get items() {
    return this.data.inventory;
  }

  addItem() {
    if (this.newItem.name && this.newItem.qty >= 0) {
      this.data.inventory.push({ ...this.newItem });
      this.newItem = { name: '', qty: 0 };
    }
  }
}
