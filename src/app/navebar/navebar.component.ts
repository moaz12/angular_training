import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})
export class NavebarComponent implements OnInit {

  isOpen:boolean = false;
  isUser:boolean= false;
  constructor(private auth:AuthService) { }
errorMessage:string;
  ngOnInit(): void {
    this.auth.user.subscribe(user => 
     {
      if(user)
      {
        this.isUser = true
        this.auth.userId = user.uid
      }
      else
      {
        this.isUser = false
        this.auth.userId = ''
      }
    })
  }
  toggleNavebar()
  {
    this.isOpen = !this.isOpen;
  }
  logOut()
  {
    this.auth.logout()
   // .then(() => console.log('out'))
    .catch(err =>this. errorMessage = err.message)
  }
}
