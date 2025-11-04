import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let scene, camera, renderer, cube;

function init() {
  scene = new THREE.Scene();

  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(1, 1, 5);
  scene.add(light); // fixed typo (was scene.add.(light))

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // custom curve + tube geometry
  class CustomSinCurve extends THREE.Curve {
    getPoint(t, optionalTarget = new THREE.Vector3()) {
      const tx = t * 3 - 1.5;
      const ty = Math.sin(2 * Math.PI * t);
      const tz = 0;
      return optionalTarget.set(tx, ty, tz);
    }
  }

  const path = new CustomSinCurve(10);
  const geometry = new THREE.TubeGeometry(path, 20, 0.2, 8, false);

  const texture = new THREE.TextureLoader().load("textures/grasslight-big.jpg");
  const material = new THREE.MeshBasicMaterial({ map: texture });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
}

function animate() {
  requestAnimationFrame(animate);

  if (cube) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

loader.load("assets/dog_shiny.gltf", function (gltf) {
  const dog = gltf.scene;
  scene.add(dog);
});
