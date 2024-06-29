import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientDashbordComponent } from './pages/client-dashbord/client-dashbord.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { ReservationClientComponent } from './pages/reservation-client/reservation-client.component';
import { ReviewComponent } from './pages/review/review.component';

const routes: Routes =
[
  { path: '', component: ClientComponent },
  { path: 'dashboard', component: ClientDashbordComponent },
  { path: 'reservations', component: ReservationClientComponent },
  { path: 'service/:id', component: ServiceDetailsComponent },
  { path: 'review/:reservationId', component: ReviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
