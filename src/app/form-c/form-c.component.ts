import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-c',
  templateUrl: './form-c.component.html',
  styleUrls: ['./form-c.component.css']
})
export class FormCComponent implements OnInit {
name:string="";
myShop:string[]=['orang', 'apple','tomato','fruit'];
mySubmit()
{
  this.myShop.push(this.name);
  this.name;
}
  constructor() { }

  ngOnInit(): void {
  }

}
