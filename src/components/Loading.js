import React, { useEffect, useRef } from "react";
import { initializeScene } from "../lib/initializeScene";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Loading({ setIsStart }) {
    const targetRef = useRef();

    useEffect(() => {
        const setup = initializeScene("#myThreeJsCanvas");
        const { camera, scene, renderer, sceneStar, stars } = setup;
        let mixer;
        const clock = new THREE.Clock();

        const loadingManager = new THREE.LoadingManager();
        const progressBar = document.getElementById("progress-bar");

        loadingManager.onProgress = (url, loaded, total) => {
            progressBar.value = (loaded / total) * 100;
            let bar = document.querySelector('.progress-bar'),
                counter = document.querySelector('.count');

            bar.style.width = (loaded / total) * 100 + '%';
            counter.innerHTML = Math.round((loaded / total) * 100) + '%';
        };

        loadingManager.onLoad = () => {
            sceneStar();
            targetRef.current.style.display = "none";
        };

        const glftLoader = new GLTFLoader(loadingManager);
        // gltfModels.map(url => (
        //     glftLoader.load(url, (gltf) => {
        //         scene.add(gltf.scene);
        //     }, undefined, (error) => {
        //         console.error(error);
        //     })
        // ))
        glftLoader.load('/images/Worker.gltf', (gltf) => {
            scene.add(gltf.scene);
        }, undefined, (error) => {
            console.error(error);
        });

        const render = () => {
            for (let i = 0; i < stars.length; i++) {
                let star = stars[i];
                star.position.z += i / 10;
                if (star.position.z > 1000) star.position.z -= 2000;
            }
        };

        const animate = () => {
            requestAnimationFrame(animate);
            requestAnimationFrame(render);

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
            <button className="btn-start" onClick={() => setIsStart(true)}>Start</button>
            <div ref={targetRef} className="progress-bar-container">
                <div id="progress-bar" className="progress-bar"></div>
                <div className="count"></div>
                <label className="progress-label" htmlFor="progress-bar">Loading...</label>
            </div>
        </>
    );
}
