import { Component } from '@angular/core';
import { ClientservicesService } from '../../services/clientservices.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../service/storage/user-storage.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  
  validateForm!:FormGroup
  reservationId:number=this.activateRoute.snapshot.params['reservationId']
  constructor(private clientService:ClientservicesService,
    private notication:NzNotificationService,
    private router:Router,
    private activateRoute:ActivatedRoute,
    private fb:FormBuilder
  ){}
  ngOnInit(){
 this.validateForm=   this.fb.group({
      note:[null,Validators.required],
      review:[null,Validators.required]
    })
  }

  saveReview(){
    const ReviewDto={
      note:this.validateForm.get('note').value,
      review:this.validateForm.get('review').value,
      userId: StorageService.getUserId(),
      reservationId: this.reservationId,
  }
  this.clientService.saveReview(ReviewDto).subscribe(res=>{
    this.notication.success(
      'SUCCESS',
      'Review posted succesfully',
      { nzDuration: 5000 }
    );
    this.router.navigateByUrl('/client/reservations')
  },error=>{
    this.notication.error(
      'Error',
      `${error.message}`,
      { nzDuration: 5000 }
    );
  })
  }
}
