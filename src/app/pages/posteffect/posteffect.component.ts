import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import * as THREE from 'three';
declare function require(x: string): any;
(window as any).THREE = THREE;
require('../../../../node_modules/three/examples/js/postprocessing/EffectComposer.js');
require('../../../../node_modules/three/examples/js/postprocessing/RenderPass.js');
require('../../../../node_modules/three/examples/js/shaders/CopyShader.js');
require('../../../../node_modules/three/examples/js/postprocessing/MaskPass.js');
require('../../../../node_modules/three/examples/js/postprocessing/ShaderPass.js');
require('../../../../node_modules/three/examples/js/shaders/DotScreenShader.js');
require('../../../../node_modules/three/examples/js/shaders/RGBShiftShader.js');
require('../../../../node_modules/three/examples/js/postprocessing/BloomPass.js');
require('../../../../node_modules/three/examples/js/shaders/ConvolutionShader.js');

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
    const renderer = new THREE.WebGLRenderer({antialias: true});
    var boxObjects = [];
    var upBoxObjects = [];
    renderer.setSize( rendererSize, rendererSize );
    this.canvasAreaElement.appendChild(renderer.domElement);
    //scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );
    //scene.add( new THREE.GridHelper( 1000, 1000 ) );
    //scene.add( new THREE.AxisHelper(20) );
    //camera
    const camera = new THREE.PerspectiveCamera(45, rendererSize / rendererSize, 1, 10000);
    camera.position.set(5, 50, -50);
    camera.lookAt(new THREE.Vector3(0,0,0));
    scene.add(camera);
    //light1
    //scene.add( new THREE.AmbientLight( 0xF0F0F0 ) );

    for(var i=0;i<100;i++){
      const geometry = new THREE.BoxGeometry(0.5,0.5,0.5)
      const material = new THREE.MeshPhongMaterial({color:Math.random() * 0xffffff ,emissive:Math.random() * 0xffffff});
      const d     = new THREE.Mesh(geometry, material);
      d.position.set( 0, i/10, 0);
      scene.add(d);
      boxObjects.push(d);
    }
    for(var i=0;i<boxObjects.length;i++){
      const geometry = new THREE.BoxGeometry(0.5,0.5,0.5)
      const material = new THREE.MeshPhongMaterial({color:Math.random() * 0xffffff ,emissive:Math.random() * 0xffffff});
      const d     = new THREE.Mesh(geometry, material);
      d.position.set( 0,  (boxObjects.length + i) / 10, 0);
      scene.add(d);
      upBoxObjects.push(d);
    }

    for(var i=0;i<500;i++){
      const geometry = new THREE.BoxGeometry(0.1,0.1,0.1)
      const material = new THREE.MeshPhongMaterial({color:0x000000 ,emissive:Math.random() * 0x000000});
      const d     = new THREE.Mesh(geometry, material);
      d.position.set( (Math.random()-0.5) *50, (Math.random()-0.5) *50, (Math.random()-0.5) *50);
      scene.add(d);
    }

    //effect
    var composer = new (window as any).THREE.EffectComposer( renderer );
    composer.setSize( rendererSize, rendererSize );
    composer.addPass( new (window as any).THREE.RenderPass( scene, camera ) );

    composer.addPass( new (window as any).THREE.BloomPass(1.0, 25, 1.0, 512) );

    const effectDotScreen = new (window as any).THREE.ShaderPass( (window as any).THREE.DotScreenShader );
		effectDotScreen.uniforms[ 'scale' ].value = 2;
	  //composer.addPass( effectDotScreen );

    var effectRGBShift = new (window as any).THREE.ShaderPass( (window as any).THREE.RGBShiftShader );
		effectRGBShift.uniforms[ 'amount' ].value = 0.01;
    effectRGBShift.renderToScreen = true;
    composer.addPass( effectRGBShift );


    //var toScreen = new (window as any).THREE.ShaderPass( (window as any).THREE.CopyShader );
    //toScreen.renderToScreen = true;
    //composer.addPass( toScreen );

    var dg = 0;
    var circleDg = 0;
    const tick = (): void => {
      this.animationFrame = requestAnimationFrame(tick);

      dg += 1;
      circleDg += 0.025;
      camera.position.x = Math.cos(THREE.Math.degToRad(dg)) * 30;
      camera.position.z = Math.sin(THREE.Math.degToRad(dg)) * 30;
      camera.position.y = Math.sin(THREE.Math.degToRad(dg)) * 30;
      camera.lookAt(new THREE.Vector3(0,boxObjects.length/10,0));

      boxObjects.forEach((v,i)=>{
        v.position.x = Math.cos(THREE.Math.degToRad(circleDg * i)) * Math.sqrt((Math.pow(boxObjects.length/10,2) - Math.pow((boxObjects.length - i)/10,2)));
        v.position.z = Math.sin(THREE.Math.degToRad(circleDg * i)) * Math.sqrt((Math.pow(boxObjects.length/10,2) - Math.pow((boxObjects.length - i)/10,2)));
      });
      upBoxObjects.forEach((v,i)=>{
        v.position.x = Math.cos(THREE.Math.degToRad(circleDg * (i + boxObjects.length))) * Math.sqrt((Math.pow(boxObjects.length/10,2) - Math.pow(i/10,2)));
        v.position.z = Math.sin(THREE.Math.degToRad(circleDg * (i + boxObjects.length))) * Math.sqrt((Math.pow(boxObjects.length/10,2) - Math.pow(i/10,2)));
      })
      composer.render();
      //renderer.render(scene, camera);
    };
    tick();
  }
  ngOnDestroy(){
    cancelAnimationFrame(this.animationFrame);
    this.canvasAreaElement.removeEventListener('click',(e)=>{console.log(e)});
  }

}
