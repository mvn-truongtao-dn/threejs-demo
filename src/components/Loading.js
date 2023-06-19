import React, { useEffect, useRef } from "react";
import { initializeScene } from "../lib/initializeScene";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Loading() {
    const targetRef = useRef();
    useEffect(() => {
        const setup = initializeScene("#myThreeJsCanvas");
        const { camera, scene, renderer } = setup;

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.z = 1;
        light.position.y = 3;
        light.castShadow = true;
        scene.add(light);
        let mixer;
        const clock = new THREE.Clock();

        const loadingManager = new THREE.LoadingManager();
        const progressBar = document.getElementById("progress-bar");
        loadingManager.onProgress = (url, loaded, total) => {
            progressBar.value = (loaded / total) * 100;
        };
        loadingManager.onLoad = () => {
            targetRef.current.style.display = "none";
        };

        const glftLoader = new GLTFLoader(loadingManager);
        glftLoader.load('/images/Worker.gltf', (gltf) => {
            scene.add(gltf.scene);
        }, undefined, (error) => {
            console.error(error);
        });

        const animate = () => {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            if (mixer) {
                mixer.update(delta);
            }
            renderer.render(scene, camera);
        };
        animate();
    }, []);
    return (
        <>
            <canvas id="myThreeJsCanvas" />
            <div ref={targetRef} className="progress-bar-container">
                <label htmlFor="progress-bar">Loading...</label>
                <progress id="progress-bar" value="0" max="100"></progress>
            </div>
        </>
    );
}





