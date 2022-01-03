import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //products: Array<Product> = [];
  //public editProduct!: Product;
  //public deleteProduct!: Product;


  constructor(private _route: Router, private _service: NgserviceService) { }

  ngOnInit(): void {
    //this.getProducts();
  }

  /*public onOpenModal(product: Product, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editProduct = product;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteProduct = product;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }

  getProducts() {
    this._service.fetchListFromRemote().subscribe(
      data => this.products = data, error => console.log("Exception occurred 1"),
    )
  }

  public updateformsubmit(product: Product) : void{
    this._service.updateToRemote(product).subscribe
    (
      (response: Product) =>{
        console.log("Data updated successfully");
        this.getProducts();
      },
      error =>console.log("Error")
    )
  }

  public deleteProductById(productId: number) : void {
    this._service.deleteBdyIdFromRemote(productId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProducts();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/
}
