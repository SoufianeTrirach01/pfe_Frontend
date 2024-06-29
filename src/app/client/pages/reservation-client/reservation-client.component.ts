import { Component } from '@angular/core';
import { CompanyService } from '../../../service/company.service';
import { ClientservicesService } from '../../services/clientservices.service';

@Component({
  selector: 'app-reservation-client',
  templateUrl: './reservation-client.component.html',
  styleUrl: './reservation-client.component.scss'
})
export class ReservationClientComponent {
  reservations:any
  constructor(private clientService: ClientservicesService) { }
  ngOnInit() {
  this.getReservations()
  }
  getReservations(){
    this.clientService.getAllReservation().subscribe(res=>{
      //console.log(res)
      this.reservations=res
    })
  }

}
