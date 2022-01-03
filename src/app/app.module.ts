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
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
