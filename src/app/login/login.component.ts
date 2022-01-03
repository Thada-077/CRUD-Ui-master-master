import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgserviceService } from '../ngservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }
  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Login Success")
        this._route.navigate(['/productlist'])
      },
      error => {
        this.msg = "Login Fail : Wrong username or password"
      }
    )
  }

  
  public registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        this.msg = "Registration Success"
        this._route.navigate(['login']);
        Swal.fire('Thank you...', 'You submitted succesfully!', 'success') 
      },
      error => {
        this.msg = error.error
      }
    )
  }

  gotoregister() {
    this._route.navigate(['register']);
  }
}
