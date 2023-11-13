import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCardsComponent } from '../data-cards/data-cards.component';
import { OrdersComponent } from '../orders/orders.component';
import { Dashboard } from 'src/app/shared.type';
import { SharedService } from 'src/app/shared.service';
import { UsersComponent } from '../users/users.component';
import { SalesStatisticsComponent } from '../sales-statistics/sales-statistics.component';
import { BalanceOverviewComponent } from '../balance-overview/balance-overview.component';
import { TopProductComponent } from '../top-product/top-product.component';

@Component({
  selector: 'app-dashnoard',
  standalone: true,
  imports: [CommonModule, DataCardsComponent, OrdersComponent, UsersComponent, SalesStatisticsComponent, BalanceOverviewComponent, TopProductComponent],
  templateUrl: './dashnoard.component.html',
  styleUrls: ['./dashnoard.component.scss']
})
export class DashnoardComponent implements OnInit {

  dashboardData: Dashboard = {
    new_users: [],
    recent_orders: [],
    top_cards: []
  };
  
  constructor(private readonly service: SharedService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getDashboardData().subscribe(res => {
      this.dashboardData = res;
    })
  }
}
