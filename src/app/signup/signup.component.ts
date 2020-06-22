import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { user } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage:string;
  constructor(private as:AuthService,private us:UserService,private router:Router) {
   
    
   }
   signup(form)
   {
     let data:user =form.value
     this.as.signup(data.email,data.password)
     
     .then(result =>{ this.errorMessage =''
      this.us.addUser(result.user.uid,data.adress,data.name).then(() => {
        this.router.navigate(['/'])
      })
    })
     .catch(err => {this.errorMessage=err.message});
     
    
   }

  ngOnInit(): void 
  {
    
  }
 

}
