import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function initializeScene(canvasId) {
    let stars = [];
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
        canvas: canvasId && document.querySelector(canvasId),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));

    if (canvasId === undefined) {
        document.body.appendChild(renderer.domElement);
    }

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;


    const sceneStar = () => {
        for (let z = -1000; z < 1000; z += 20) {
            let geometry = new THREE.SphereGeometry(0.5, 32, 32)
            let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
            let sphere = new THREE.Mesh(geometry, material)

            sphere.position.x = Math.random() * 1000 - 500;
            sphere.position.y = Math.random() * 1000 - 500;

            sphere.position.z = z;

            sphere.scale.x = sphere.scale.y = 2;

            scene.add(sphere);

            stars.push(sphere);
        }
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }, false)

    return {
        scene, camera, renderer, controls, sceneStar, stars
    }
}
