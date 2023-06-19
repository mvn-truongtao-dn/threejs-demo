<<<<<<< HEAD
import "./App.css";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Character from "./components/Character";
import ListCharacter from "./components/ListCharacter";
=======
import './App.css';
import Loading from './components/Loading';
>>>>>>> develop

function App() {
  // useEffect(() => {
  //   const scene = new THREE.Scene();

  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );

  //   camera.position.set(4.61, 2.74, 8);

  //   const renderer = new THREE.WebGLRenderer({
  //     canvas: document.querySelector("#game"),
  //   });
  //   renderer.shadowMap.enabled = true;
  //   renderer.setSize(window.innerWidth, window.innerHeight);

  //   const axesHelper = new THREE.AxesHelper(4);
  //   scene.add(axesHelper);

  //   const controls = new OrbitControls(camera, renderer.domElement);

  //   class Box extends THREE.Mesh {
  //     constructor({
  //       width,
  //       height,
  //       depth,
  //       color = "#00ff00",
  //       velocity = {
  //         x: 0,
  //         y: 0,
  //         z: 0,
  //       },
  //       position = { x: 0, y: 0, z: 0 },
  //       zAcceleration = false,
  //     }) {
  //       super(
  //         new THREE.BoxGeometry(width, height, depth),
  //         new THREE.MeshStandardMaterial({ color })
  //       );
  //       this.width = width;
  //       this.height = height;
  //       this.depth = depth;

  //       this.position.set(position.x, position.y, position.z);

  //       this.right = this.position.x + this.width / 2;
  //       this.left = this.position.x - this.width / 2;

  //       this.bottom = this.position.y - this.height / 2;
  //       this.top = this.position.y + this.height / 2;

  //       this.font = this.position.z + this.depth / 2;
  //       this.back = this.position.z - this.depth / 2;

  //       this.velocity = velocity;
  //       this.gravity = -0.002;
  //       this.zAcceleration = zAcceleration;
  //     }

  //     updateSides() {
  //       this.right = this.position.x + this.width / 2;
  //       this.left = this.position.x - this.width / 2;

  //       this.bottom = this.position.y - this.height / 2;
  //       this.top = this.position.y + this.height / 2;

  //       this.font = this.position.z + this.depth / 2;
  //       this.back = this.position.z - this.depth / 2;
  //     }

  //     update(ground) {
  //       this.updateSides();

  //       if (this.zAcceleration) {
  //         this.velocity.z += 0.0003;
  //       }

  //       this.position.x += this.velocity.x;
  //       this.position.z += this.velocity.z;

  //       //detect for collision on the x axis

  //       this.applyGravity(ground);
  //     }

  //     applyGravity(ground) {
  //       //toc do vat toc tang dan
  //       this.velocity.y += this.gravity;

  //       // if (this.bottom + this.velocity.y <= ground.top) {
  //       if (boxCollision({ box1: this, box2: ground })) {
  //         //sau khi cham dat
  //         const friction = 0.4;
  //         this.velocity.y *= friction;
  //         this.velocity.y = -this.velocity.y;
  //       } else {
  //         //vat roi
  //         this.position.y += this.velocity.y;
  //       }
  //     }
  //   }

  //   const boxCollision = ({ box1, box2 }) => {
  //     const xCollision = box1.right >= box2.left && box1.left <= box2.right;
  //     const yCollision =
  //       box1.bottom + box1.velocity.y <= box2.top && box1.top >= box2.bottom;
  //     const zCollision = box1.font >= box2.back && box1.back <= box2.font;

  //     return yCollision && xCollision && zCollision;
  //   };

  //   const cube = new Box({
  //     width: 1,
  //     height: 1,
  //     depth: 1,
  //     velocity: {
  //       x: 0,
  //       y: -0.01,
  //       z: 0,
  //     },
  //   });
  //   cube.castShadow = true;
  //   scene.add(cube);

  //   const ground = new Box({
  //     width: 10,
  //     height: 0.5,
  //     depth: 50,
  //     color: "#0369a1",
  //     position: {
  //       x: 0,
  //       y: -2,
  //       z: 0,
  //     },
  //   });

  //   ground.receiveShadow = true;
  //   scene.add(ground);

  //   const light = new THREE.DirectionalLight(0xffffff, 1);
  //   light.position.z = 1;
  //   light.position.y = 3;
  //   light.castShadow = true;
  //   scene.add(light);

  //   scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  //   camera.position.z = 5;

  //   const keys = {
  //     a: {
  //       pressed: false,
  //     },
  //     d: {
  //       pressed: false,
  //     },
  //     w: {
  //       pressed: false,
  //     },
  //     s: {
  //       pressed: false,
  //     },
  //   };

  //   window.addEventListener("keydown", (event) => {
  //     // eslint-disable-next-line default-case
  //     switch (event.code) {
  //       case "KeyA": {
  //         keys.a.pressed = true;
  //         break;
  //       }
  //       case "KeyD": {
  //         keys.d.pressed = true;
  //         break;
  //       }
  //       case "KeyW": {
  //         keys.w.pressed = true;
  //         break;
  //       }
  //       case "KeyS": {
  //         keys.s.pressed = true;
  //         break;
  //       }
  //     }
  //   });

  //   window.addEventListener("keyup", (event) => {
  //     // eslint-disable-next-line default-case
  //     switch (event.code) {
  //       case "KeyA": {
  //         keys.a.pressed = false;
  //         break;
  //       }
  //       case "KeyD": {
  //         keys.d.pressed = false;
  //         break;
  //       }
  //       case "KeyW": {
  //         keys.w.pressed = false;
  //         break;
  //       }
  //       case "KeyS": {
  //         keys.s.pressed = false;
  //         break;
  //       }
  //       case "Space": {
  //         cube.velocity.y = 0.08;
  //         break;
  //       }
  //     }
  //   });

  //   const enemies = [];

  //   let frames = 0;
  //   let spawnRate = 100;

  //   const animate = () => {
  //     const animationId = requestAnimationFrame(animate);
  //     renderer.render(scene, camera);

  //     //movement code
  //     cube.velocity.x = 0;
  //     cube.velocity.z = 0;

  //     if (keys.a.pressed) {
  //       cube.velocity.x = -0.05;
  //     } else if (keys.d.pressed) {
  //       cube.velocity.x = 0.05;
  //     } else if (keys.w.pressed) {
  //       cube.velocity.z = -0.05;
  //     } else if (keys.s.pressed) {
  //       cube.velocity.z = 0.05;
  //     }

  //     cube.update(ground);

  //     enemies.forEach((enemy) => {
  //       enemy.update(ground);
  //       if (
  //         boxCollision({
  //           box1: cube,
  //           box2: enemy,
  //         })
  //       ) {
  //         window.cancelAnimationFrame(animationId);
  //       }
  //     });

  //     if (frames % spawnRate === 0) {
  //       if (spawnRate > 10) {
  //         spawnRate -= 10;
  //       }
  //       const enemy = new Box({
  //         width: 1,
  //         height: 1,
  //         depth: 1,
  //         position: {
  //           x: (Math.random() - 0.5) * 10,
  //           y: 0,
  //           z: -20,
  //         },
  //         velocity: {
  //           x: 0,
  //           y: 0,
  //           z: 0.005,
  //         },
  //         color: "red",
  //         zAcceleration: true,
  //       });
  //       enemy.castShadow = true;
  //       scene.add(enemy);
  //       enemies.push(enemy);
  //     }
  //     frames++;
  //   };

  //   animate();
  // });
  return (
    <>
      {/* <canvas id="game"></canvas> */}
      {/* <Character /> */}
      <ListCharacter />
      {/* <Loading /> */}
    </>
  );
}

export default App;
