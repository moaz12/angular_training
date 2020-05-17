import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpParams} from'@angular/common/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private httpO:HttpClient) 
  {
    this.httpO.get('https://jsonplaceholder.typicode.com/posts',
    {
observe:'body',
params: (new HttpParams()).set('userId','1')
/***observeType
'response'
//'events'
/****responseType:'text'
'json'*/  
})
.subscribe((p)=>{console.log(p);})
/**** output of responseType
.subscribe((j)=>
{
  console.log(j);
})

/*.subscribe((e : HttpEvent<object>) =>
{
if(e.type == HttpEventType.Response)
{
  console.log('done: ',e);
}
})*/

    //.subscribe(dataa => console.log(dataa))
   }

  ngOnInit(): void {
  }

}
