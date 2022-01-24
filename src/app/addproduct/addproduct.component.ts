import { Component, OnInit , ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { data } from 'jquery';
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

  provinceNo : number;
  districtNo : number;

  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
    this.getProvince();
    this.getDistrictList();
    this.getDistrictList()
  }

addformsubmit()
{
this._service.addToRemote(this.product).subscribe
(
  data =>{
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
    console.log("Data added successfully");
    setTimeout(() => {
      window.location.reload();
   }, 2000);
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

getDistrictList(){
  this._service.fetchDistrictAllFromRemote().subscribe(
    data => this.districts = data, error => console.log("Exception occurred 1"),
  )
}
getSubdistrictList(){
  this._service.fetchSubdistrictAllFromRemote().subscribe(
    data => this.subdistricts = data, error => console.log("Exception occurred 1"),
  )
}

getDistrict(provinceId:number) {
  this._service.fetchDistrictFromRemote(provinceId).subscribe(
    data => this.districts = data, error => console.log("Exception occurred 1"),
  )
}

getSubdistrict(districtId:number) {
  this._service.fetchsubdistrictFromRemote(districtId).subscribe(
    data => this.subdistricts = data, error => console.log("Exception occurred 1"),
  )
}

}
