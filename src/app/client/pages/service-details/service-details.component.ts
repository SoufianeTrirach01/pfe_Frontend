import { Component } from '@angular/core';
import { ClientservicesService } from '../../services/clientservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { StorageService } from '../../../service/storage/user-storage.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent {
  service_id = this.activeRoute.snapshot.params['id'];
  avatarUrl: any;
  service: any;
  validateForm!: FormGroup;
  reviews:any

  constructor(private notification: NzNotificationService, private activeRoute: ActivatedRoute, private route: Router, private fb: FormBuilder, private serviceClient: ClientservicesService) { }

  ngOnInit() {
      this.validateForm = this.fb.group({
          dateReservation: [null, Validators.required]
      });
      this.getServiceById();
  }

  getServiceById() {
      this.serviceClient.getByIdServices(this.service_id).subscribe(res => {
          console.log(res);
          this.avatarUrl = 'data:image/jpeg;base64,' + res.serviceDto.returnedImg;
          this.service = res.serviceDto;
          this.reviews=res.reviewDtoList
      });
  }

  reserverService() {
    const ReservationDTO = {
        dateReservation: this.validateForm.get('dateReservation')?.value,
        service_id: this.service_id,
        userId: StorageService.getUserId()
    }
    this.serviceClient.reserverSevices(ReservationDTO).subscribe(res=>{

                this.notification.success(
                    'SUCCESS',
                    'request posted succesfully',
                    { nzDuration: 5000 }
                );
                this.route.navigateByUrl('client/dashboard')

              })
            }

}
