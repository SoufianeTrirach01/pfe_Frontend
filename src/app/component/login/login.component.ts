import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from '../../service/auth/auth.service';
import { StorageService } from '../../service/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NzNotificationService,
    private route:Router
  ) {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit(): void {

      this.authService.login(
        this.validateForm.get(['email']).value,
         this.validateForm.get(['password']).value
        )
      .subscribe(
        res => {

        console.log(res);
        if (StorageService.isClientLoggedIn()) {
          this.route.navigateByUrl('/client/dashboard');
        } else if (StorageService.isCompanyLoggedIn()) {
          this.route.navigateByUrl('/company/dashboard');
        } else {
          this.notification.error('ERROR', 'Unknown role', { nzDuration: 5000 });
        }
        },


        error  => {
          this.notification.error('ERROR', 'Email or password is incorrect', { nzDuration: 5000 });
      });
    }

  }
