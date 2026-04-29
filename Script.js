// script.js
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// THREE.JS SAFARI SCENE
const container = document.getElementById("threejs-container");
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 5);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);
const sunLight = new THREE.DirectionalLight(0xffd27f, 1);
sunLight.position.set(5, 10, 7);
scene.add(sunLight);

// Ground (savannah)
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0xc2b280 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
scene.add(ground);

// Placeholder Safari Jeep (cube)
const jeepGeometry = new THREE.BoxGeometry(1, 0.5, 2);
const jeepMaterial = new THREE.MeshLambertMaterial({ color: 0x2c3e50 });
const jeep = new THREE.Mesh(jeepGeometry, jeepMaterial);
jeep.position.y = 0.25;
scene.add(jeep);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  jeep.position.x += 0.02; // jeep drives forward
  if (jeep.position
