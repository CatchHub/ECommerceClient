import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderModule } from './order/order.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    OrderModule,
    DashboardModule,
    ProductsModule
  ]
})
export class ComponentsModule { }
