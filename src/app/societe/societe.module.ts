import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocieteRoutingModule } from './societe-routing.module';
import { SocieteComponent } from './societe.component';
import { SocieteDashbordComponent } from './pages/societe-dashbord/societe-dashbord.component';
import { CreateServicesComponent } from './pages/create-services/create-services.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AllServicesComponent } from './pages/all-services/all-services.component';
import { UpdateServiceComponent } from './pages/update-service/update-service.component';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    SocieteComponent,
    SocieteDashbordComponent,
    CreateServicesComponent,
    AllServicesComponent,
    UpdateServiceComponent
  ],
  imports: [
    CommonModule,
    SocieteRoutingModule,
    ReactiveFormsModule,
    NzFormModule, // Add NzFormModule here
    NzInputModule, // Add NzInputModule here if needed
    NzButtonModule, // Add NzButtonModule here if needed
    NzTableModule
  ],

})
export class SocieteModule { }
