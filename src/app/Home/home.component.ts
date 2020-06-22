import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { good } from '../interfaces/good';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { GoodsService } from '../services/goods.service';
import { element } from 'protractor';
import { privateEncrypt } from 'crypto';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  goods:good[];
  constructor(private getgood:GoodsService) { }

  ngOnInit(): void {
    //with valuechanges method of AngularFirestore object  in GoodsService
    //this.getgood.getAll().subscribe(data => this.goods=data )
   /* this.getgood.getAll().subscribe(data => 
    {
        data.map( element =>
        {
          return
          {
            id : element.payload.doc.id

            /*name : element.payload.doc.data()['name'];
            price : element.payload.doc.data()['price'];
            imgUrl:element.payload.doc.data()['imgUrl']

          }
       
        })
        
    })*/
    
  }
  addToCard()
  {
    console.log('added');
  }
}
