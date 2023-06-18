import "./App.css";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const axesHelper = new THREE.AxesHelper(4);
    scene.add(axesHelper);

    const controls = new OrbitControls(camera, renderer.domElement);

    class Box extends THREE.Mesh {
      constructor({
        width,
        height,
        depth,
        color = "#00ff00",
        velocity = {
          x: 0,
          y: 0,
          z: 0,
        },
        position = { x: 0, y: 0, z: 0 },
      }) {
        super(
          new THREE.BoxGeometry(width, height, depth),
          new THREE.MeshStandardMaterial({ color })
        );
        this.width = width;
        this.height = height;
        this.depth = depth;

        this.position.set(position.x, position.y, position.z);

        this.bottom = this.position.y - this.height / 2;
        this.top = this.position.y + this.height / 2;

        this.velocity = velocity;
        this.gravity = -0.002;
      }

      update(ground) {
        this.bottom = this.position.y - this.height / 2;
        this.top = this.position.y + this.height / 2;

        this.applyGravity();
      }

      applyGravity() {
        //toc do vat toc tang dan
        this.velocity.y += this.gravity;

        if (this.bottom + this.velocity.y <= ground.top) {
          //sau khi cham dat
          this.velocity.y *= 0.8;
          this.velocity.y = -this.velocity.y;
        } else {
          //vat roi
          this.position.y += this.velocity.y;
        }
      }
    }

    const cube = new Box({
      width: 1,
      height: 1,
      depth: 1,
      velocity: {
        x: 0,
        y: -0.01,
        z: 0,
      },
    });
    cube.castShadow = true;
    scene.add(cube);

    console.log(cube.position.y);

    const ground = new Box({
      width: 5,
      height: 0.5,
      depth: 10,
      color: "#0000ff",
      position: {
        x: 0,
        y: -2,
        z: 0,
      },
    });

    ground.receiveShadow = true;
    scene.add(ground);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.z = 2;
    light.position.y = 3;
    light.castShadow = true;
    scene.add(light);

    console.log(ground.position.y);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      cube.update(ground);
      // cube.position.y += -0.01;
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.02;
    };

    animate();
  });
  return <></>;
}

export default App;
