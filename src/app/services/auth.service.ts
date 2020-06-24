import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';
import { Observer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user : Observable<firebase.User>
userId:string=''
  
constructor(private fas:AngularFireAuth)
  {
     this.user = fas.user
  }
  signup(email,password)
  {
    return this.fas.createUserWithEmailAndPassword(email,password);
  }
  signin(email,password)
  {
return this.fas.signInWithEmailAndPassword(email,password);
  }
  logout()
  {
    return this.fas.signOut();
  }
}
