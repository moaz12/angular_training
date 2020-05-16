import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,Observer, from, observable } from 'rxjs';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit,OnDestroy{

  Odata:Observable<Array<number>>=Observable.create((oser:Observer<number[]>) => {
  let Arr=[];
    setInterval(() => {
      Arr.push(Arr.length)
      oser.next(Arr)
    }, 1000); 
   
   }); 
mysub:Subscription;  
myArr:Array<number>=[];
  constructor() { }

  ngOnInit(): void {
  this.mysub=this.Odata.subscribe(Arr =>this.myArr=Arr)
    //(data)=>{console.log(data)})
  }
  ngOnDestroy()
  {
    this.mysub.unsubscribe();
  }

  
}
