import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PaperScope, Project, Path, Point,view,Symbol } from 'paper';

@Component({
  selector: 'app-top-area',
  templateUrl: './top-area.component.html',
  styleUrls: ['./top-area.component.css']
})
export class TopAreaComponent implements OnInit {

  @ViewChild('canvas') canvasElement: ElementRef;
  scope: PaperScope;
  project: Project;

  constructor() {
  }

  ngOnInit() {
    this.scope = new PaperScope();
    this.project = new Project(this.canvasElement.nativeElement);
    let canvas = (this.canvasElement.nativeElement as Element);
    var pathArray = [];
    var pathAddNumber = [];
    for(var i=0;i<canvas.scrollWidth/10;i++){
      let radius = Math.random() * 35;
      const path = new Path.Circle({
        center: [Math.random() * canvas.scrollWidth, Math.random() * canvas.scrollHeight],
        radius: radius,
        fillColor: '#'+Math.floor(Math.random()*16777215).toString(16)
      });
      pathArray.push(path);
      this.project.activeLayer.addChild(path);
      pathAddNumber[i] = {
        x:Math.random() - 0.5,
        y:Math.random()
      };
    }
    setInterval(()=>{
      for(var i=0;i<canvas.scrollWidth/10;i++){
        if(canvas.scrollHeight < pathArray[i].position.y || pathArray[i].position.y < 0){
          pathAddNumber[i].y *= -1;
        }
        if(pathArray[i].position.x > canvas.scrollWidth || pathArray[i].position.x < 0){
          pathAddNumber[i].x *= -1;
        }
        pathArray[i].position.y += pathAddNumber[i].y;
        pathArray[i].position.x += pathAddNumber[i].x;
      }
    },1);

  }

}
