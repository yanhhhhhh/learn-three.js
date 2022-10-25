import "./style.css";

import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	BoxGeometry,
	MeshBasicMaterial,
	Mesh,
} from "three";
/**
 * 1. 创建场景对象scene
 * 2. 创建相机对象camera
 * 3.创建渲染对象 renderer
 * 4.创建一个立方体几何对象Geometry
 */

const scene = new Scene();
const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	10000
);
camera.position.z = 10;
const renderer = new WebGLRenderer();
//
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
scene.add(cube);

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}
animate();
