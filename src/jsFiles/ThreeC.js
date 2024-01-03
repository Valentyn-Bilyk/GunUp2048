import * as THREE from "three";
import { ShotgunC } from "./ShotgunC";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const ThreeC = {
  canvas: null,
  scene: null,
  renderer: null,
  ambientLight: null,
  directionalLight: null,
  camera: null,
  init: function () {
    this.canvas = document.querySelector(".canvas");

    this.scene = new THREE.Scene();

    this.ambientLight = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(this.ambientLight);


    this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    this.camera.position.z = 2
    this.camera.position.y = 2
    this.camera.rotation.x = -Math.PI / 4

    console.log(this.camera)
    this.scene.add(this.camera)
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setSize(sizes.width, sizes.height);
    this.renderer.setClearColor('aqua')
  },
  update() {
    this.cameraUpdate();
    this.renderer.render(this.scene, this.camera);
  },
  cameraUpdate() {
    if (ShotgunC.physicsBody && this.camera.position) {
      const offset = new THREE.Vector3(0, 1.75, 0.5)
      const gunPosition = ShotgunC.position;
      this.camera.position.copy(gunPosition).add(offset);
    }
  },
};
