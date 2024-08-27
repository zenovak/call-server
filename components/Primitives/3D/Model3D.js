import { useEffect } from "react"
import * as THREE from 'three';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


function setCameraOptions(cameraInstance, cameraPosition, orbitControlInstance) {

    // Note: orbitControl will look at towards the model center. if you set your camera position to 
    if (cameraPosition) {
        cameraInstance.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
        orbitControlInstance.target.set(cameraPosition.x, cameraPosition.y, 0);
    } else {
        cameraInstance.position.set(0, 0, 200);
    }
}

/**
 * 
 * @param {*} canvasId id example #hello
 * @param {*} file file path to fbx file
 */
function instanciate3D(canvasId, width, height, file, cameraOptions) {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
        canvas: document.body.querySelector(canvasId), // Append renderer via CSS target instead
        alpha: true                                    // Makes transparent bg
    }); 
    const camera = new THREE.PerspectiveCamera(20, width/height, 0.1, 1000);
    const control = new OrbitControls(camera, renderer.domElement);

    let model = null;

    // https://stackoverflow.com/questions/29884485/threejs-canvas-size-based-on-container
    // Like Images, we must specify a canvas size.
    // setting false allows us to use our own css to handle the sizing adjustments when we resize its parent containers
    renderer.setSize(width, height, false); 

    // Shading see https://discourse.threejs.org/t/enable-sketchfab-like-lighting-and-shadows/20226/2
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const pmremGenerator = new THREE.PMREMGenerator( renderer );
    pmremGenerator.compileEquirectangularShader();

    if (file) {
        const loader = new GLTFLoader();
        loader.load(file, gltf => {
            model = gltf.scene;
            scene.add(model);
        }, undefined, error => {

            console.log(`Model3D: ${error}`);
        });
    } else {
        model = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1, 1),
            new THREE.MeshLambertMaterial({ color: 0x00ff00 } )
        );
        scene.add(model);
    }

    
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(0, 20, 20);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 4;
    dirLight.shadow.camera.bottom = - 4;
    dirLight.shadow.camera.left = - 4;
    dirLight.shadow.camera.right = 4;
    dirLight.shadow.camera.near = 0.1;
    dirLight.shadow.camera.far = 40;
    dirLight.shadow.camera.far = 40;
    dirLight.shadow.bias = - 0.002;

    setCameraOptions(camera, cameraOptions && cameraOptions.position, control);
    control.enablePan = false;
    control.enableZoom = false;
    control.update();

    scene.add(ambientLight);
    scene.add(dirLight)

    function animate() {
        if (model) {
            model.rotation.y += 0.005;
        }

        renderer.render(scene, camera);
        control.update();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}


/**
 * Set the class name
 * @param {*} param0 
 * @returns 
 */
export const Model3D = ({id, width, height, file, cameraOptions, ...props}) => {

    useEffect(()=> {
        instanciate3D(`#${id}`, width, height, file, cameraOptions);
        console.log("Attached once ");
    }, []);

    return <canvas id={id} {...props}></canvas>
}