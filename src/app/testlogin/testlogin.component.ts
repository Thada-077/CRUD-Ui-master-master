import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../user';
import Swal from 'sweetalert2';
import { GoogleSigninService } from '../service/google-signin.service';
import { FormGroup } from '@angular/forms';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

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

  usergoogle: gapi.auth2.GoogleUser
  
  @Input() error: string | null;

  myForm!: FormGroup;
  userFace!: SocialUser;
  isSignedin!: boolean;

  constructor(private router: Router,private loginservice: AuthenticationService,private _service: NgserviceService,private signInService: GoogleSigninService, private ref : ChangeDetectorRef, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.signInService.observable().subscribe (user => {
      this.usergoogle = user
      this.ref.detectChanges()
    })

    this.socialAuthService.authState.subscribe((userFace) => {
      this.userFace = userFace;
      this.isSignedin = (userFace != null);
      console.log(this.userFace);
    });
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
  //google login
  signIn(){
    this.signInService.signIn()
    this.router.navigate([''])
  }
  
  //facebook login
  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigate([''])
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
