import { Component } from '@angular/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface Order {
  name: string;
  quantity: number;
  unitPrice: number;
}
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatFormField,
    MatButton,
    MatTable,
    MatColumnDef,
    MatCell,
    MatHeaderCell,
    MatIcon,
    MatHeaderRow,
    MatRow,
    MatIconButton,
    MatHeaderRowDef,
    MatRowDef,
    MatCellDef,
    MatHeaderCellDef,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  orderForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
      unitPrice: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
    });
  }
  orders: Order[] = [
    {
      name: 'Data Matrix task',
      quantity: 1,
      unitPrice: 1,
    },
  ];
  displayedColumns: string[] = ['name', 'quantity', 'unitPrice', 'delete'];
  addOrder() {
    if (this.orderForm.valid) {
      const newOrder: Order = this.orderForm.value;
      this.orders = [...this.orders, newOrder];
      this.orderForm.reset();
    }
  }

  deleteOrder(order: Order) {
    if (this.orders.length > 1) {
      this.orders = this.orders.filter(el => el !== order);
    }
  }
}
