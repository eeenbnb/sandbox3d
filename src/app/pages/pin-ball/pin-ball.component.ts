import { Component, OnInit , OnDestroy , ViewChild , ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-pin-ball',
  templateUrl: './pin-ball.component.html',
  styleUrls: ['./pin-ball.component.css']
})
export class PinBallComponent implements OnInit {
  @ViewChild('canvasArea') canvasArea:ElementRef;
  canvasAreaElement:Element;
  animationFrame;

  constructor() { }

  ngOnInit() {
    this.canvasAreaElement = this.canvasArea.nativeElement as Element;
    let rendererSize = this.canvasAreaElement.scrollWidth;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( rendererSize, rendererSize );
    this.canvasAreaElement.appendChild(renderer.domElement);
    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x5e5e5e );
    scene.add( new THREE.GridHelper( 1000, 1000 ) );
    //scene.add( new THREE.AxisHelper(20) );
    //camera
    const camera = new THREE.PerspectiveCamera(120, rendererSize / rendererSize, 1, 10000);
    camera.position.set(6, 6, -6);
    camera.lookAt(new THREE.Vector3(0,0,0));
    scene.add(camera);
    //light
    //scene.add( new THREE.AmbientLight( 0xF0F0F0 ) );

    const geometry = new THREE.IcosahedronGeometry(1,5)
    const material = new THREE.MeshPhongMaterial({color: 0x000000,emissive:0xf0f0f0});
    const box      = new THREE.Mesh(geometry, material);
    box.position.set(0,0,0);
    scene.add(box);

    const boulGeometry = new THREE.IcosahedronGeometry(1,5)
    const boulMaterial = new THREE.MeshPhongMaterial({color: 0xff0000,emissive:0xfff0f0});
    const boul1         = new THREE.Mesh(geometry, material);
    const boul2         = new THREE.Mesh(geometry, material);
    boul1.position.set(5,5,5);
    boul2.position.set(-5,-5,-5);

    scene.add(boul2);
    scene.add(boul1);

    const tick = (): void => {
      this.animationFrame = requestAnimationFrame(tick);
      renderer.render(scene, camera);
    };
    tick();
    var dg =0;
    setInterval(()=>{
      dg += 0.25;
      boul1.position.x = Math.cos(THREE.Math.degToRad(dg * 5)) * 5;
      boul1.position.y = Math.cos(THREE.Math.degToRad(dg * 5)) * 5;
      boul1.position.z = Math.sin(THREE.Math.degToRad(dg * 5)) * 5;

      boul2.position.x = Math.cos(THREE.Math.degToRad(dg * 5)) * 5;
      boul2.position.y = Math.sin(THREE.Math.degToRad(dg * 5)) * 5;
      boul2.position.z = Math.sin(THREE.Math.degToRad(dg * 5)) * 5;

      camera.position.x = Math.cos(THREE.Math.degToRad(dg)) * 10;
      camera.position.y = Math.sin(THREE.Math.degToRad(dg/0.5)) * 2 + 10;
      camera.position.z = Math.sin(THREE.Math.degToRad(dg)) * 10;
      
      camera.lookAt(box.position);
    },1);
  }
  ngOnDestroy(){
    cancelAnimationFrame(this.animationFrame);
  }

}
