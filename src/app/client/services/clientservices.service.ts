import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { StorageService } from '../../service/storage/user-storage.service';

const BASIC_URL = "http://localhost:9090/";

@Injectable({
  providedIn: 'root'
})

export class ClientservicesService {

  constructor(private http: HttpClient) { }

  getAllServices(): Observable<any> {
    return this.http.get(BASIC_URL + `api/client/services`, { headers: this.createAuthorizationHeader() })
  }
  getByNameServices(name: any): Observable<any> {
    return this.http.get(BASIC_URL + `api/client/services/${name}`, { headers: this.createAuthorizationHeader() })
  }

  getByIdServices(service_id: any): Observable<any> {
    return this.http.get(BASIC_URL + `api/client/service/${service_id}`, { headers: this.createAuthorizationHeader() })

  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders()
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    )
  }
  // client service
  reserverSevices(ReservationDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + `api/client/reserver`, ReservationDTO, { headers: this.createAuthorizationHeader() })

  }
  getAllReservation():Observable<any>{
    const userId=StorageService.getUserId()
    return this.http.get(BASIC_URL + `api/client/reservation/${userId}`
      ,      { headers: this.createAuthorizationHeader() })


  }
  saveReview(ReviewDto: any): Observable<any> {
    return this.http.post(BASIC_URL + `api/client/saveReview`, ReviewDto,
       { headers: this.createAuthorizationHeader() })
  }
}
