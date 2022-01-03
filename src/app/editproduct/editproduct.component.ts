import { Component, OnInit } from '@angular/core';
import { Product} from '../product';
import {ActivatedRoute, Router} from '@angular/router';
import {NgserviceService} from '../ngservice.service';
import { Province } from '../province';
import { District } from '../district';
import { Subdistrict } from '../subdistrict';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

    productToUpdate = new Product();
    provinces: Array<Province> = [];
    districts: Array<District> = [];
    subdistricts: Array<Subdistrict> = [];

  constructor(private _route: Router, private _service: NgserviceService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {  
    let id = parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this._service.fetchBdyIdFromRemote(id).subscribe(
      data=> {
        console.log("Data fetched successfully");this.productToUpdate = data;

      },
      error => console.log("Exception on fetching product by id to edit")
    )
    this.getProvince();
    this.getDistrict();
    this.getSubdistrict()
  }
  updateformsubmit()
  {
    this._service.updateToRemote(this.productToUpdate).subscribe
    (
      data =>{
        console.log("Data updated successfully");
        Swal.fire('Thank you...', 'You submitted succesfully!', 'success') 
      },
      error =>console.log("Error")
    )
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

  gotolist() {
    this._route.navigate(['productlist']);
  }
}
