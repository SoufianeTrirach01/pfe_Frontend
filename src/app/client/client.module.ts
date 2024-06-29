import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientDashbordComponent } from './pages/client-dashbord/client-dashbord.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ReservationClientComponent } from './pages/reservation-client/reservation-client.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReviewComponent } from './pages/review/review.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    ClientComponent,
    ClientDashbordComponent,
    ServiceDetailsComponent,
    ReservationClientComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTableModule,
    NzRateModule,
    NzCardModule,
    NzRateModule,
    FormsModule,
  ],

})
export class ClientModule { }
