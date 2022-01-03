import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-testlogin',
  templateUrl: './testlogin.component.html',
  styleUrls: ['./testlogin.component.css']
})
export class TestloginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  user = new User();
  msg='';
  
  @Input() error: string | null;

  constructor(private router: Router,private loginservice: AuthenticationService,private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        this.error = error.message;

      }
    )
    );

  }

  public registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        this.msg = "Registration Success"
        Swal.fire('Thank you...', 'You submitted succesfully!', 'success') 
      },
      error => {
        this.msg = error.error
      }
    )
  }
}
