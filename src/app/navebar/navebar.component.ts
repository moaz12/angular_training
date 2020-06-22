import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})
export class NavebarComponent implements OnInit {

  isOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }
  toggleNavebar()
  {
    this.isOpen = !this.isOpen;
  }
}
