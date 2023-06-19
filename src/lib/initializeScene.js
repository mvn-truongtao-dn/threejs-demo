import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function initializeScene(canvasId) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.set(0, 3, 5);
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: document.querySelector(canvasId),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const controls = new OrbitControls(camera, renderer.domElement);

    return {
        scene, camera, renderer, controls
    }
}
