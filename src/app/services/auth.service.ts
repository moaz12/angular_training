import { Injectable } from '@angular/core';
import {AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fas:AngularFireAuth)
   {
     
    }
  signup(email,password)
  {
    return this.fas.createUserWithEmailAndPassword(email,password);
  }
}
