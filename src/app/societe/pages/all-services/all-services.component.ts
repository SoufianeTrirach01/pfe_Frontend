import { Component } from '@angular/core';
import { CompanyService } from '../../../service/company.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrl: './all-services.component.scss'
})
export class AllServicesComponent {

  services: any
  constructor(private serviceCompany: CompanyService,
    private notification: NzNotificationService, private router: Router)  { }
  ngOnInit() {
    this.getAllServiceById()
  }
  getAllServiceById() {
    this.serviceCompany.getAllServices().subscribe(res => {
      this.services = res
    }
    )
  }
  updateImg(img) {
    return 'data:image/jpeg;base64,' + img
  } 
  deleteService(serviceId:any){
    this.serviceCompany.deleteService(serviceId).subscribe(res=>
      {
      this.notification.success
      ('Success', 'Service Deleted successfully', { nzDuration: 5000 }
      )
      this.getAllServiceById()
      this.router.navigateByUrl('/company/services')
    }, error => {
      this.notification.error('ERROR',`${error.error}`, { nzDuration: 5000 });
    });
  }

  }
