import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage/user-storage.service';

const BASIC_URL = "http://localhost:9090/";

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private http: HttpClient) { }
  servicePost(ServiceDto: any): Observable<any> {
    const userId = StorageService.getUserId();
    return this.http.post(BASIC_URL + `api/company/service/${userId}`, ServiceDto, { headers: this.createAuthorizationHeader() })

  }
  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders()
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    )
  }
  getAllReservation():Observable<any>{
    const companyId=StorageService.getUserId()
    return this.http.get(BASIC_URL + `api/company/reservation/${companyId}`
      ,      { headers: this.createAuthorizationHeader() })


  }
  getAllServices(): Observable<any> {
    const userId = StorageService.getUserId();
    return this.http.get(BASIC_URL + `api/company/services/${userId}`,
      { headers: this.createAuthorizationHeader() })

  }
  getServiceById(serviceId: any): Observable<any> {
    return this.http.get(BASIC_URL + `api/company/service/${serviceId}`,
      { headers: this.createAuthorizationHeader() })

  }
  updateService(serviceId: any, serviceDto: any):Observable<any> {
    return this.http.put(BASIC_URL + `api/company/service/${serviceId}`, serviceDto,
      { headers: this.createAuthorizationHeader() })
  }
  deleteService(serviceId: any) {
    return this.http.delete(BASIC_URL + `api/company/service/${serviceId}`, { headers: this.createAuthorizationHeader() })
  }
  changeReservationStatus(reservationId:number,status:string):Observable<any>{
    return this.http.get(BASIC_URL + `api/company/reservation/${reservationId}/${status}`
      ,      { headers: this.createAuthorizationHeader() })


  }

}
