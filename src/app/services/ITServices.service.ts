import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  users:string[];

  constructor() 
  {
    this.users=['ayman','ahmed','moaz','yousef'];

   }
   getUsers()
   {
     return this.users;
   }
}
