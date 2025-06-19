import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Item {
  name: string;
  qty: number;
}

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  items: Item[] = [];
  newItem: Item = { name: '', qty: 0 };

  addItem() {
    if (this.newItem.name && this.newItem.qty >= 0) {
      this.items.push({ ...this.newItem });
      this.newItem = { name: '', qty: 0 };
    }
  }
}
