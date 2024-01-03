import * as THREE from "three";
import * as CANNON from 'cannon-es'
import CannonDebugger from 'cannon-es-debugger'

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ThreeC } from "./ThreeC";
import { GunUp_MapC } from "./GunUp_MapC";
import { ShotgunC } from "./ShotgunC";

ThreeC.init();

export const world = new CANNON.World()
export const cannonDebugger = new CannonDebugger(ThreeC.scene, world, {})

const gltfLoader = new GLTFLoader();

gltfLoader.load("/GunUp_Map.glb", (map) => {
  ThreeC.scene.add(map.scene);
  GunUp_MapC.init(map);
});

const clock = new THREE.Clock();
let previousTime = 0;

function animate() {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  world.fixedStep();
  cannonDebugger.update();
  ShotgunC.update()
  ThreeC.update();

  requestAnimationFrame(animate);
}

animate();
