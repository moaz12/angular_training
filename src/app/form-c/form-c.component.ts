import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {employees} from './employees';
import{FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css']
})  
export class FormCComponent implements OnInit {
verifyObject = [];
  user=
{
  name:"",
  Lname:"",
  age:0
}
 employee:employees=
{
    $key:"",
    Firstname:"",
    secondtname:"",
    email:"",
    country:"",
    city:"",
    phone:"",
    salary:0
};
disableSalary:boolean=true;

mySubmit({value,valid})
{
  if(valid)
  {
    this.verifyObject=[value.name,value.age,value.Lname] ;
    //this.verifyObject.push
  }
  else
  {
    'this value is invalid';
  }

}

mySubmition({value,valid}:{value:employees,valid:boolean})
    {
      if(!valid)
      {
        this.flashMessageService.show('please enter your data',{cssClass:'alert-danger',timeout:6000});
      }
        else
      {
        console.log(this.employee);
      }
    
    }
// mySubmition(n)
//     {
      
//     }


  constructor(public flashMessageService : FlashMessagesService
    ) {   }

  ngOnInit(): void
   {
    
    
  }

  
}
