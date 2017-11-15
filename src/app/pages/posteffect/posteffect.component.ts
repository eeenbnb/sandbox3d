import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import * as THREE from 'three';
declare function require(x: string): any;
(window as any).THREE = THREE;
require('../../../../node_modules/three/examples/js/controls/PointerLockControls');

@Component({
  selector: 'app-posteffect',
  templateUrl: './posteffect.component.html',
  styleUrls: ['./posteffect.component.css']
})
export class PosteffectComponent implements OnInit {
  @ViewChild('canvasArea') canvasArea:ElementRef;
  canvasAreaElement:Element;
  animationFrame;

  constructor() { }

  ngOnInit() {
    this.canvasAreaElement = this.canvasArea.nativeElement as Element;
    let rendererSize = this.canvasAreaElement.scrollWidth;
    const renderer = new THREE.WebGLRenderer();
    var boxObjects = [];
    var upBoxObjects = [];
    renderer.setSize( rendererSize, rendererSize );
    this.canvasAreaElement.appendChild(renderer.domElement);
    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x5e5e5e );
    //scene.add( new THREE.GridHelper( 1000, 1000 ) );
    scene.add( new THREE.AxisHelper(20) );
    //camera
    const camera = new THREE.PerspectiveCamera(45, rendererSize / rendererSize, 1, 100000);
    camera.position.set(5, 50, -50);
    camera.lookAt(new THREE.Vector3(0,0,0));
    scene.add(camera);
    //light1
    scene.add( new THREE.AmbientLight( 0xF0F0F0 ) );

    for(var i=0;i<100;i++){
      const geometry = new THREE.BoxGeometry(0.5,0.5,0.5)
      const material = new THREE.MeshPhongMaterial({color:Math.random() * 0xffffff ,emissive:0xff0000});
      const d     = new THREE.Mesh(geometry, material);
      d.position.set( 0, i/10, 0);
      scene.add(d);
      boxObjects.push(d);
    }
    for(var i=0;i<boxObjects.length;i++){
      const geometry = new THREE.BoxGeometry(0.5,0.5,0.5)
      const material = new THREE.MeshPhongMaterial({color:Math.random() * 0xffffff ,emissive:0xff0000});
      const d     = new THREE.Mesh(geometry, material);
      d.position.set( 0,  (boxObjects.length + i) / 10, 0);
      scene.add(d);
      upBoxObjects.push(d);
    }

    var dg = 0;
    const tick = (): void => {
      this.animationFrame = requestAnimationFrame(tick);

      dg += 0.125;

      camera.position.x = Math.cos(THREE.Math.degToRad(dg)) * 50;
      camera.position.z = Math.sin(THREE.Math.degToRad(dg)) * 50;
      camera.position.y = Math.sin(THREE.Math.degToRad(dg * 5)) * 50;
      camera.lookAt(new THREE.Vector3(0,5,0));

      boxObjects.forEach((v,i)=>{
        v.position.x = Math.cos(THREE.Math.degToRad(dg * i)) * Math.sqrt((Math.pow(boxObjects.length/10,2) - Math.pow((boxObjects.length - i)/10,2)));
        v.position.z = Math.sin(THREE.Math.degToRad(dg * i)) * Math.sqrt((Math.pow(boxObjects.length/10,2) - Math.pow((boxObjects.length - i)/10,2)));
      });
      upBoxObjects.forEach((v,i)=>{
        v.position.x = Math.cos(THREE.Math.degToRad(dg * (i + boxObjects.length))) * Math.sqrt((Math.pow(boxObjects.length/10,2) - Math.pow(i/10,2)));
        v.position.z = Math.sin(THREE.Math.degToRad(dg * (i + boxObjects.length))) * Math.sqrt((Math.pow(boxObjects.length/10,2) - Math.pow(i/10,2)));
      })

      renderer.render(scene, camera);
    };
    tick();
  }
  ngOnDestroy(){
    cancelAnimationFrame(this.animationFrame);
    this.canvasAreaElement.removeEventListener('click',(e)=>{console.log(e)});
  }

}
