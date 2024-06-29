import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocieteComponent } from './societe.component';
import { SocieteDashbordComponent } from './pages/societe-dashbord/societe-dashbord.component';
import { CreateServicesComponent } from './pages/create-services/create-services.component';
import { AllServicesComponent } from './pages/all-services/all-services.component';
import { UpdateServiceComponent } from './pages/update-service/update-service.component';

const routes: Routes = [
  { path: '', component: SocieteComponent },
  { path: 'dashboard', component: SocieteDashbordComponent },
  { path: 'service', component:CreateServicesComponent },
  {path:'services',component:AllServicesComponent},
  {path:'service/:id',component:UpdateServiceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocieteRoutingModule { }
