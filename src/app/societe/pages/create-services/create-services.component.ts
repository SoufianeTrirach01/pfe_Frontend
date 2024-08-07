import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CompanyService } from '../../../service/company.service';

@Component({
  selector: 'app-create-services',
  templateUrl: './create-services.component.html',
  styleUrl: './create-services.component.scss'
})
export class CreateServicesComponent {
  selectedFile: File | null
  imagePreview: string | ArrayBuffer | null
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private notification: NzNotificationService, private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      serviceName: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]]
    });
  }
 // Handle Image
 onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
  this.previewImage();
}

previewImage() {
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result;
  };
  reader.readAsDataURL(this.selectedFile);
}
postService() {
    const formData: FormData = new FormData();
    formData.append('img', this.selectedFile);
    formData.append('serviceName', this.validateForm.get('serviceName')?.value);
    formData.append('description', this.validateForm.get('description')?.value);
    formData.append('price', this.validateForm.get('price')?.value);

    this.companyService.servicePost(formData).subscribe(res => {
      console.log(res)
      this.notification.success('Success', 'Service added successfully', { nzDuration: 5000 });
      this.router.navigateByUrl('/company/services');
    }, error => {
      this.notification.error('ERROR',`${error.error}`, { nzDuration: 5000 });
    });
  }
}
