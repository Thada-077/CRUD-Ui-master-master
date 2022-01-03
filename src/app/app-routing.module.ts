import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductlistComponent} from './productlist/productlist.component';
import {AddproductComponent} from './addproduct/addproduct.component';
import {EditproductComponent} from './editproduct/editproduct.component';
import {ViewproductComponent} from './viewproduct/viewproduct.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { TestloginComponent } from './testlogin/testlogin.component';

const routes: Routes = [
  {path: '', component: ProductlistComponent,canActivate:[AuthGaurdService] },
  {path: 'login', component: TestloginComponent},
  {path: 'addproduct', component: AddproductComponent,canActivate:[AuthGaurdService] },
  {path: 'editproduct/:id', component: EditproductComponent,canActivate:[AuthGaurdService] },
  {path: 'editproduct', component: EditproductComponent,canActivate:[AuthGaurdService] },
  {path: 'viewproduct', component: ViewproductComponent,canActivate:[AuthGaurdService] },
  {path: 'viewproduct/:id', component: ViewproductComponent,canActivate:[AuthGaurdService] },
  {path: 'productlist', component: ProductlistComponent,canActivate:[AuthGaurdService] }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
