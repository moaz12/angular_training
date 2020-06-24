import { Component, OnInit } from '@angular/core';
import { user } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage:string;
  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
    
  }
signin(form)
{
  let adata = form.value
this.authservice.signin(adata.email,adata.password)
.then(result => this.errorMessage='')
.then(() =>  this.router.navigate(['/']))
.catch(err =>this.errorMessage = err.message)

}

}
