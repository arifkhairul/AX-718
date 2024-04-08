import GUI from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

/**
 * Base
 */
// Debug
const debugObject = {}
// const gui = new GUI({
//     width: 400
// })

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader()

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Textures
 */
const bakedTexture1 = textureLoader.load('advancedexplorer-b1.jpg')
bakedTexture1.flipY = false
bakedTexture1.colorSpace = THREE.SRGBColorSpace

const bakedTexture2 = textureLoader.load('advancedexplorer-b2.jpg')
bakedTexture2.flipY = false
bakedTexture2.colorSpace = THREE.SRGBColorSpace

const bakedTexture3 = textureLoader.load('advancedexplorer-b3.jpg')
bakedTexture3.flipY = false
bakedTexture3.colorSpace = THREE.SRGBColorSpace

const bakedTexture4 = textureLoader.load('advancedexplorer-b4.jpg')
bakedTexture4.flipY = false
bakedTexture4.colorSpace = THREE.SRGBColorSpace

const bakedTexture5 = textureLoader.load('advancedexplorer-b5.jpg')
bakedTexture5.flipY = false
bakedTexture5.colorSpace = THREE.SRGBColorSpace

const bakedTexture6 = textureLoader.load('advancedexplorer-b6.jpg')
bakedTexture6.flipY = false
bakedTexture6.colorSpace = THREE.SRGBColorSpace

const bakedTexture7 = textureLoader.load('advancedexplorer-b7.jpg')
bakedTexture7.flipY = false
bakedTexture7.colorSpace = THREE.SRGBColorSpace

const bakedTexture8 = textureLoader.load('advancedexplorer-b8.jpg')
bakedTexture8.flipY = false
bakedTexture8.colorSpace = THREE.SRGBColorSpace

/**
 * Materials
 */
// Baked material
const b1Material = new THREE.MeshBasicMaterial({ map: bakedTexture1 })

const b2Material = new THREE.MeshBasicMaterial({ map: bakedTexture2 })

const b3Material = new THREE.MeshBasicMaterial({ map: bakedTexture3 })

const b4Material = new THREE.MeshBasicMaterial({ map: bakedTexture4 })

const b5Material = new THREE.MeshBasicMaterial({ map: bakedTexture5 })

const b6Material = new THREE.MeshBasicMaterial({ map: bakedTexture6 })

const b7Material = new THREE.MeshBasicMaterial({ map: bakedTexture7 })

const b8Material = new THREE.MeshBasicMaterial({ map: bakedTexture8 })

/**
 * Model
 */
gltfLoader.load(
    'advancedexplorer-1.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b1Material
        })
        scene.add(gltf.scene)
    }
)

gltfLoader.load(
    'advancedexplorer-2.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b2Material
        })
        scene.add(gltf.scene)
    }
)

gltfLoader.load(
    'advancedexplorer-3.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b3Material
        })
        scene.add(gltf.scene)
    }
)

gltfLoader.load(
    'advancedexplorer-4.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b4Material
        })
        scene.add(gltf.scene)
    }
)

gltfLoader.load(
    'advancedexplorer-5.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b5Material
        })
        scene.add(gltf.scene)
    }
)

gltfLoader.load(
    'advancedexplorer-6.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b6Material
        })
        scene.add(gltf.scene)
    }
)

gltfLoader.load(
    'advancedexplorer-7.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b7Material
        })
        scene.add(gltf.scene)
    }
)

gltfLoader.load(
    'advancedexplorer-8.glb',
    (gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b8Material
        })
        scene.add(gltf.scene)
    }
)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 10
camera.position.y = 2
camera.position.z = -6.5
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true;
controls.rotateSpeed = 0.25;
controls.maxDistance = 9;
controls.autoRotateSpeed *= -0.009;
 
controls.update();

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

debugObject.clearColor = '#191919'
renderer.setClearColor(debugObject.clearColor)
// gui
//     .addColor(debugObject, 'clearColor')
//     .onChange(() =>
//     {
//         renderer.setClearColor(debugObject.clearColor)
//     })

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()