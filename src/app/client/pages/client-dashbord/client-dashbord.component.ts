import { Component } from '@angular/core';
import { ClientservicesService } from '../../services/clientservices.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-dashbord',
  templateUrl: './client-dashbord.component.html',
  styleUrl: './client-dashbord.component.scss'
})
export class ClientDashbordComponent {
  validateForm!: FormGroup
  services: any = []
  constructor(private serviceClient: ClientservicesService,
     private fb: FormBuilder) {

  }
  getAllService() {
    this.serviceClient.getAllServices().subscribe(res => {
      this.services = res;
    })
  }
  getServiceByName() {
    this.serviceClient.getByNameServices(
      this.validateForm.get(['service']).value).subscribe(
        res => {
      this.services = res;
    })
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      service: [null, Validators.required]
    })
    this.getAllService()
  }
  updateImg(img) {
    return 'data:image/jpeg;base64,' + img
  }
}
