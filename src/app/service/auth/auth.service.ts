import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StorageService } from '../storage/user-storage.service';

const BASIC_URL = "http://localhost:9090/";

  const AUTH_HEADER = 'Authorization'; // Assuming the token is returned in this header

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userstorageService: StorageService) { }

  registreClient(signupRequestDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "client/sign-up", signupRequestDto)
  }

  registreEntreprise(signupRequestDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "company/sign-up", signupRequestDto)
//   }
//   login(username: string, password: string) {
//     return this.http.post(BASIC_URL + "authenticate", { username, password }, { observe: 'response' })
//       .pipe(
//         map((res: HttpResponse<any>) => {
//           console.log(res.body);
//           const bearerToken = res.headers.get('Authorization')?.substring(7);
//           console.log(bearerToken);
//           // Store the token in local storage or a service for later use
//           if (bearerToken) {
//             localStorage.setItem('jwtToken', bearerToken);
//           }
//           return res;
//         })


// );
//   login(username: string, password: string) {
//     return this.http.post(BASIC_URL + "authenticate", { username, password }, { observe: 'response' })
//         .pipe(
//             map((res: HttpResponse<any>) => {
//                 console.log(res.body);
//                // this.userstorageService.saveUser(res.body);
//                 const tokenLength = res.headers.get(AUTH_HEADER)?.length;
//                 const bearerToken = res.headers.get(AUTH_HEADER)?.substring(7,tokenLength);
//                 console.log(bearerToken)
//                 //this.userstorageService.saveToken(bearerToken);

//                 return res;
//             })
//         );
// }

}

login(email: string, password: string): Observable<any> {
  return this.http.post(BASIC_URL + 'authenticate', {  email, password }, { observe: 'response' })
    .pipe(
      map((res: HttpResponse<any>) => {
        this.userstorageService.saveUser(res.body)
        const tokenLength = res.headers.get('Authorization')?.length;
        const bearerToken = res.headers.get('Authorization')?.substring(7, tokenLength);
        this.userstorageService.saveToken(bearerToken)

        console.log(res.body)
        console.log(bearerToken);
        return res.body;
      })
    );
}}
