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
  newItem: InventoryItem = { name: '', qty: 0, category: '' };
  editingIndex: number | null = null;

  constructor(public data: DataService) {}

  get items() {
    return this.data.inventory;
  }

  addItem() {
    if (this.newItem.name && this.newItem.qty >= 0 && this.newItem.category) {
      if (this.editingIndex === null) {
        this.data.inventory.push({ ...this.newItem });
      } else {
        this.data.inventory[this.editingIndex] = { ...this.newItem };
        this.editingIndex = null;
      }
      this.newItem = { name: '', qty: 0, category: '' };
    }
  }

  editItem(i: number) {
    this.editingIndex = i;
    this.newItem = { ...this.data.inventory[i] };
  }

  cancelEdit() {
    this.editingIndex = null;
    this.newItem = { name: '', qty: 0, category: '' };
  }
}
