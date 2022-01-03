import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import {NgserviceService} from '../ngservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../product';
import { Province } from '../province';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y'
import Swal from 'sweetalert2';
import { District } from '../district';
import { Subdistrict } from '../subdistrict';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Array<Product> = [];
  
  page = 1;
  pageSize = 4;
  collectionSize = this.products.length;
  prolist: Product[];

  constructor(private _route: Router, private _service: NgserviceService, private _liveAnnouncer: LiveAnnouncer) { }

  user: string;

  ngOnInit(): void {
    this.getProducts();
   //this.user = this.isUserLoggedIn('User');
    this.refreshCountries();
  }
  
  refreshCountries() {
    this.prolist = this.products
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  getProducts() {
    this._service.fetchListFromRemote().subscribe(
      data => this.products = data, error => console.log("Exception occurred 1"),
    )
  }
  isEmpty()
  {
    if (this.products == null)
    {
      return true;
    }
    else { return false; }
  }

  goToAddProduct() {
    this._route.navigate(['/addproduct']);
  }

  goToUpdateProduct(id: number) {
    console.log("id: "+ id);
    this._route.navigate(['/editproduct', id]);
  }


  goToViewProduct(id: number){
    this._route.navigate(['/viewproduct', id]);

  }

  deleteProduct(id: number) {
   Swal.fire({  
    title: 'Are you sure want to remove?',  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, delete it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) {  
      Swal.fire(  
        'Deleted!',  
        'Your imaginary file has been deleted.',  
        'success',
      ) 
      return this._service.deleteBdyIdFromRemote(id).subscribe(
        success =>{
          ("Product deleted succesfully");
        },
        error=> {console.log("Exception occured 2"); this.getProducts()}
       ) 
    } else if (result.dismiss === Swal.DismissReason.cancel) {  
      Swal.fire(  
        'Cancelled',  
        'Your imaginary file is safe :)',  
        'error'  
      )  
    }  
  }) 
}

//   isUserLoggedIn(User: string): string {
//     User = localStorage.getItem(User);
//     if (User === null) {
//       Swal.fire({
//         icon: 'error',  
//         text: 'Something went wrong!', 
//         position: 'center',
//         title: 'Please Login!',
//         showConfirmButton: false,
//         timer: 2000,
//       });
//     this._route.navigate(['/login'])
//     }
//     return User;
// }

logout() {
  localStorage.clear();
  console.log("logout success");
  this._route.navigate(['/login'])
}

}
