import { Component } from '@angular/core';
import { CompanyService } from '../../../service/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrl: './update-service.component.scss'
})
export class UpdateServiceComponent {
  serviceId: any = this.activatedRoute.snapshot.params['id']
  constructor(private serviceCompany: CompanyService, private activatedRoute: ActivatedRoute, private fb: FormBuilder,
    private notification: NzNotificationService, private router: Router) { }

  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  validateForm!: FormGroup;
  existingImg: string | null = null
  imgChanged = false

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      serviceName: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]]
    });
    this.getServiceById()
  }
  // Handle Image
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
    this.existingImg = null
    this.imgChanged = true
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }


  updateService() {
    const formData: FormData = new FormData();
    if (this.imgChanged && this.selectedFile) {
      formData.append('img', this.selectedFile);

    }
    formData.append('serviceName', this.validateForm.get('serviceName')?.value);
    formData.append('description', this.validateForm.get('description')?.value);
    formData.append('price', this.validateForm.get('price')?.value);

    this.serviceCompany.updateService(this.serviceId, formData).subscribe(res => {
      this.notification.success('Success', 'Service Updated successfully', { nzDuration: 5000 });
      this.router.navigateByUrl('/company/services');
    }, error => {
      this.notification.error('ERROR', `${error.error}`, { nzDuration: 5000 });
    });
  }
  getServiceById() {
    this.serviceCompany.getServiceById(this.serviceId).subscribe(res => {
      console.log(res)
      this.validateForm.patchValue(res)
      this.existingImg = 'data:image/jpeg;based64,' + res.returnedImg;
    }

    )
  }
}
