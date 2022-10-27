import "./style.css";

import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	BoxGeometry,
	MeshPhongMaterial,
	Mesh,
	ColorRepresentation,
	DirectionalLight,
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
	5
);
camera.position.set(0, 0, 2);
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new BoxGeometry(1, 1, 1);
function createInstance(
	geometry: BoxGeometry,
	color: ColorRepresentation,
	x: number
) {
	// 该材质需要灯光
	const material = new MeshPhongMaterial({ color });

	const cube = new Mesh(geometry, material);
	scene.add(cube);
	cube.position.x = x;
	return cube;
}
function createLight() {
	const color = 0xffffff;
	const light = new DirectionalLight(color, 1);
	light.position.set(-1, 2, 4);
	scene.add(light);
}
createLight();
const Instances = [
	createInstance(geometry, 0x44aa88, 0),
	createInstance(geometry, 0x8844aa, -2),
	createInstance(geometry, 0xaa8844, 2),
];
const animate = (time: number) => {
	time *= 0.001;
	Instances.forEach((i, ndx) => {
		const speed = 1 + ndx * 0.1;
		const rot = time * speed;
		i.rotation.x = rot;
		i.rotation.y = rot;
	});
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
};
requestAnimationFrame(animate);
