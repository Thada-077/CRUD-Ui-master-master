import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {

  private auth2: gapi.auth2.GoogleAuth
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)

  constructor(private router: Router) { 
    gapi.load('auth2', ()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '605470790327-7pe22nvcg86c9m91bbatjlcvq1rm3pv9.apps.googleusercontent.com'
      })
    })
  }

  public signIn(){
    this.auth2.signIn({
      scope: 'https://www.googleapis.com/auth/gmail.readonly'
    }).then ( user => {
      this.subject.next(user)
      this.router.navigate([''])
    }).catch(() =>{
      this.subject.next(null)
    })
  }

  public signOut () {
    this.auth2.signOut()
    .then( () =>{
      this.subject.next(null)
    })
  }

  public observable() : Observable<gapi.auth2.GoogleUser>{
    return this.subject.asObservable()
  }
}
