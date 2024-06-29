import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-company',
  templateUrl: './sign-up-company.component.html',
  styleUrl: './sign-up-company.component.scss'
})
export class SignUpCompanyComponent {
  validatForm!: FormGroup

  constructor(private fb: FormBuilder, private nothification: NzNotificationService, private authService: AuthService, private route:Router) { }
  ngOnInit(): void {
    this.validatForm = this.fb.group(
      {
      email: [null, [Validators.email, Validators.required]],
      name: [null, [Validators.required]],
      adresse: [null, [Validators.required]],
      phone: [null],
      password: [null, [Validators.required]],
      confpassword: [null, [Validators.required]],
      }
      )

  }
  submitForm(){
    const password=this.validatForm.get('password').value;
    const confirmPassword=this.validatForm.get('confpassword').value;
    if (password !== confirmPassword) {
      this.nothification.error('ERROR', 'Password and Confirm Password must match', { nzDuration: 5000 });
      return;
    }
      this.authService.registreEntreprise(this.validatForm.value).subscribe(
        { next: (data: any) => {
          this.nothification.success('SUCCESS', 'SignUp Successful',{ nzDuration: 5000 }
        );
          this.route.navigateByUrl('/login');
        },
        error: (error: any) => {
          this.nothification.error( 'ERROR',
          ` ${error.error}`,
          { nzDuration: 5000 })

        }
      });}

  }



