import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription } from 'rxjs';
import { good } from '../interfaces/good';

import { GoodsService } from '../services/goods.service';
import { element } from 'protractor';
import { privateEncrypt } from 'crypto';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  goods:good[]=[]
  goodsObservable:Subscription
  constructor(private getgood:GoodsService) { }

  ngOnInit() {
    
     
     this.getgood.getAll().subscribe(data => 
    {
         data.map( element =>
        {
          return
          {
            id : element.payload.doc.id
            
            name : element.payload.doc.data()['name'];
            price : element.payload.doc.data()['price'];
            imgUrl:element.payload.doc.data()['imgUrl']

          }
       
        })
        
    })
    
  }
  ngOnDestroy()
  {
    this.goodsObservable.unsubscribe()
  }
  addToCard(id)
  {
    console.log('added',id);
  }
}
