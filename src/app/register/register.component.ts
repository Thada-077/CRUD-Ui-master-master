import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private _route: Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  public registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        this.msg = "Registration Success"
        this._route.navigate(['login']);
      },
      error => {
        this.msg = error.error
      }
    )
  }

  gotologin() {
    this._route.navigate(['login']);
  }
}
