import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { OrdersComponent } from './orders/orders.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { VouchersComponent } from './vouchers/vouchers.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, CommonModule, TabViewModule, OrdersComponent, VouchersComponent, ProfilesComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
