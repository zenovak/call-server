import { useEffect, useRef } from "react"
import * as THREE from 'three';


function instanciate3D(canvasId, width, height, file) {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ canvas: document.body.querySelector(canvasId) });
  // Replace PerspectiveCamera with OrthographicCamera
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);

  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 1),
    new THREE.MeshLambertMaterial({ color: 0x00ff00 })
  );

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);

  camera.position.z = 5;
  scene.add(cube);
  scene.add(ambientLight);

  function resize() {
    const canvas = renderer.domElement;
    const height = canvas.clientHeight;
    const width = canvas.clientWidth;

    if (width !== canvas.width || height !== canvas.height) {
      renderer.setSize(width, height);

      // Calculate camera dimensions based on viewport aspect ratio
      const aspect = width / height;
      camera.left = -aspect;
      camera.right = aspect;
      camera.top = 1;
      camera.bottom = -1;
      camera.updateProjectionMatrix();

      // Adjust cube scale to fit within the viewport
      const scale = Math.min(width, height) / 2;
      cube.scale.set(scale, scale, scale);
    }
  }

  function animate() {
    resize();

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}



/**
 * Set the class name
 * @param {*} param0 
 * @returns 
 */
export const Model3DOrtho = ({id, file, ...props}) => {

    useEffect(()=> {
        instanciate3D(`#${id}`);
        console.log("Attached once ");
    }, []);

    return <canvas id={id} {...props}></canvas>
}