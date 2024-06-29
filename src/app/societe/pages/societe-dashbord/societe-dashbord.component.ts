import { Component } from '@angular/core';
import { CompanyService } from '../../../service/company.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-societe-dashbord',
  templateUrl: './societe-dashbord.component.html',
  styleUrl: './societe-dashbord.component.scss'
})
export class SocieteDashbordComponent {
  reservations: any
  constructor(private companyService: CompanyService,private nothification:NzNotificationService) { }
  ngOnInit() {
    this.getReservation()

  }
  getReservation() {
    this.companyService.getAllReservation().subscribe(res => {
     // console.log(res)
      this.reservations = res
    })
  }
  changeReservationStatus(reservationId:number,status:string){
      this.companyService.changeReservationStatus(reservationId,status)
      .subscribe(res=>{
        this.nothification.success(
          'SUCCESS',
          'RESERVATION STATUS CHANGER AVEC SUCCER',
          {nzDuration:5000}
        );
        this.getReservation()
      },error=>{

        this.nothification.error(
          'ERROR',
          `${error.message}`,
          {nzDuration:5000}
        )
      })
  }
}
