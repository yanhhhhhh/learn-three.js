

import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	
  LineBasicMaterial,
  Vector3,
  BufferGeometry,
  Line,
} from "three";
/**
 * 1. 创建场景对象scene
 * 2. 创建相机对象camera
 * 3.创建渲染对象 renderer
 * 4.创建一个立方体几何对象Geometry
 */
// 场景
const scene = new Scene();
// 相机
const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	10000
);
camera.position.set(0,0,100);

// 渲染器
const renderer = new WebGLRenderer();
//
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const merterial =  new LineBasicMaterial({color:0x0000ff})
const points = []
points.push(new Vector3(-10,0,0))
points.push(new Vector3(0,10,0))
points.push(new Vector3(10,0,0))
console.log('point',points);

const geometry = new BufferGeometry().setFromPoints(points)
const line = new Line(geometry,merterial)
scene.add(line)
console.log('line',line);

renderer.render(scene,camera)


