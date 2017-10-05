import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @ViewChild('sidebar') sidebar:ElementRef;
  beforeIndex:number = 0;
  pages:any =[
    {
      link:"./",
      name:"Top"
    },
    {
      link:"./3dview",
      name:"3dview"
    }
  ]


  constructor() {}

  ngOnInit() {}

  clickLink(index:number){
    if(index > this.beforeIndex){
      console.log("down");
    }else{
      console.log("up");
    }
    this.beforeIndex = index;
  }

}
