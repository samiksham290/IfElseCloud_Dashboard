import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Orders } from 'src/app/shared.type';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input('data') orders: Orders[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('orders', this.orders);
  }
}
