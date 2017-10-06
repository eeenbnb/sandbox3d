import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PageEventService } from '../../services/page-event/page-event.service'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @ViewChild('sidebar') sidebar:ElementRef;
  beforeIndex:number = 0;
  animeState:string = "";
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


  constructor(public pageEvent:PageEventService) {}

  ngOnInit() {
    this.pageEvent.eventData.subscribe(()=>{
      this.pageEvent.sendStateData(this.animeState);
    })
  }

  clickLink(index:number){
    if(index > this.beforeIndex){
      this.animeState = "slideInDown";
    }else{
      this.animeState = "slideInUp";
    }
    this.beforeIndex = index;
  }

}
