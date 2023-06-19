import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as SkeletonUtils from "three/addons/utils/SkeletonUtils.js";

const gltfTextureURL = new URL(
  "../../public/model/Worker.gltf",
  import.meta.url
);
const gltfTextureURL2 = new URL(
  "../../public/model/Suit.gltf",
  import.meta.url
);
const gltfTextureURL3 = new URL(
  "../../public/model/Witch.gltf",
  import.meta.url
);
const gltfTextureURL4 = new URL(
  "../../public/model/Soldier.gltf",
  import.meta.url
);

const listGltf = [
  gltfTextureURL,
  gltfTextureURL2,
  gltfTextureURL3,
  gltfTextureURL4,
];

export default function ListCharacter() {
  useEffect(() => {
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
      canvas: document.querySelector("#character"),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));

    const controls = new OrbitControls(camera, renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.z = 1;
    light.position.y = 3;
    light.castShadow = true;
    scene.add(light);

    let mixer;

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(gltfTextureURL.href, (gltf) => {
      console.log(gltf);
      const model = gltf.scene;

      console.log(gltf.animations);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      const clips = gltf.animations;
      const clip = THREE.AnimationClip.findByName(clips, "Run");
      const clip2 = THREE.AnimationClip.findByName(clips, "Run_Back");
      const clip3 = THREE.AnimationClip.findByName(clips, "Run_Left");
      const clip4 = THREE.AnimationClip.findByName(clips, "Run_Right");

      const action = mixer.clipAction(clip);
      action.play();
    });

    const clock = new THREE.Clock();

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
  console.log(listGltf);

  const handleCharacter = (url) => {
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
      canvas: document.querySelector("#character"),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.9));

    const controls = new OrbitControls(camera, renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.z = 1;
    light.position.y = 3;
    light.castShadow = true;
    scene.add(light);

    let mixer;

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(url, (gltf) => {
      console.log(gltf);
      const model = gltf.scene;

      console.log(gltf.animations);
      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      const clips = gltf.animations;
      const clip = THREE.AnimationClip.findByName(clips, "Run");
      const clip2 = THREE.AnimationClip.findByName(clips, "Run_Back");
      const clip3 = THREE.AnimationClip.findByName(clips, "Run_Left");
      const clip4 = THREE.AnimationClip.findByName(clips, "Run_Right");

      const action = mixer.clipAction(clip);
      const action2 = mixer.clipAction(clip2);

      action2.play();
    });

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) {
        mixer.update(delta);
      }
      renderer.render(scene, camera);
    };

    animate();
  };
  return (
    <>
      <canvas id="character"></canvas>
      <div className="group-button-character">
        {listGltf.map((item) => (
          <div>
            <button
              onClick={() => handleCharacter(item.href)}
              className="button-character"
            >
              {item.href}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
