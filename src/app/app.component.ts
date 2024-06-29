import { Component } from '@angular/core';
import { StorageService } from './service/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Frontend';
  isClientIsLoggedIn:boolean=StorageService.isClientLoggedIn()
  isCompanyIsLoggedIn:boolean=StorageService.isCompanyLoggedIn()
constructor(private router:Router){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.router.events.subscribe(event=>{
    this.isClientIsLoggedIn=StorageService.isClientLoggedIn();
    this.isCompanyIsLoggedIn=StorageService.isCompanyLoggedIn();
  })
}
logout(){
  StorageService.signOut()
  this.router.navigateByUrl('login')
}
}
