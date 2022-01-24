import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { MaterialExampleModule } from 'src/material.module';
import { TestloginComponent } from './testlogin/testlogin.component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-interceptor.service';
import {DataTablesModule} from 'angular-datatables';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    EditproductComponent,
    ViewproductComponent,
    AddproductComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    TestloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    DataTablesModule,
    SocialLoginModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true } , 
    { provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(
            '213138361026097'
          )
        }
      ]
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
