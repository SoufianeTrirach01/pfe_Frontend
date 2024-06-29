import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './src/app/app-routing.module';
import { AppComponent } from './src/app/app.component';
import { LoginComponent } from './src/app/component/login/login.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemonNgZorroAntdModule } from './src/app/DemonNgZorroAntdModule';
import { SignupClientComponent } from './src/app/component/signup-client/signup-client.component';
import { SignUpCompanyComponent } from './src/app/component/sign-up-company/sign-up-company.component';
import { SignupComponent } from './src/app/signup/signup.component';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupClientComponent,
    SignUpCompanyComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DemonNgZorroAntdModule,
    ReactiveFormsModule

  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: fr_FR },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
