import { Component, OnInit , ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Address } from '../address';
import { District } from '../district';
import {NgserviceService} from '../ngservice.service';
import {Product} from '../product';
import { Province } from '../province';
import { Subdistrict } from '../subdistrict';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  product = new Product();
  provinces: Array<Province> = [];
  districts: Array<District> = [];
  subdistricts: Array<Subdistrict> = [];
  addresss: Array<Address> = [];

  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
    this.getProvince();
    this.getDistrict();
    this.getSubdistrict()
  }

addformsubmit()
{
this._service.addToRemote(this.product).subscribe
(
  data =>{
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
    console.log("Data added successfully");
    this._route.navigate(['productlist']);
  },
  error =>console.log("Error")
)
}

gotolist() {
  this._route.navigate(['productlist']);
}

getProvince() {
  this._service.fetchProvinceFromRemote().subscribe(
    data => this.provinces = data, error => console.log("Exception occurred 1"),
  )
}
getDistrict() {
  this._service.fetchDistrictFromRemote().subscribe(
    data => this.districts = data, error => console.log("Exception occurred 1"),
  )
}
getSubdistrict() {
  this._service.fetchsubdistrictFromRemote().subscribe(
    data => this.subdistricts = data, error => console.log("Exception occurred 1"),
  )
}

}
