import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private SF:AngularFirestore) { }
  addUser(id,name,adress)
  {
   return  this.SF.doc('user/'+id).set
    ({name,adress });
  }
}
