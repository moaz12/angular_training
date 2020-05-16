import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
//data:Observable<Array<string>>

users:string[];

  constructor() 
  {
    this.users=['ayman','ahmed','moaz','yousef'];

   }
   
 /*  getEmployee()
   {
     this.data=new observable (observe=>{
setTimeout(()=>
{
  observe.next('mohamed');
},1000);  
     })
   }*/

   getUsers()
   {
     return this.users;
   }
}
