var octahedron1;
var torus;
var tetrahedron1;
var cube;
var octahedron2;
var dodecahedron;
var icosahedron;
var tetrahedron2;
var tube1;
var tube2;
var pentPrism;

var Xt_1; 
var Zt_1;
var Xt_2;
var Zt_2;
var Xc_1;
var Zc_1;
var Xo_1; 
var Zo_1;
var Xo_2; 
var Zo_2;
var Xtor_1;
var Ztor_1;
var Xd_1; 
var Zd_1;
var Xi_1;
var Zi_1;
var Xl_1;
var Yl_1;
var Zl_1;
var Xl_2;
var Yl_2;
var Zl_2;
var Xp_1;
var Zp_1;

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), anitalias: true}); 
	renderer.setClearColor(0x000000);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
		camera.position.z = 5	
var scene = new THREE.Scene();

var light = new THREE.AmbientLight(0xffffff, 0.25);
var light1 = new THREE.PointLight(0xffffff, .9);

scene.add(light);
scene.add(light1);

		Xt_1 = -16;
		Zt_1 = -10;

		Xt_2 = -1000; 
		Zt_2 = -15; 

		Xc_1 = -11; 
		Zc_1 = -15;

		Xo_1 = -1000;
		Zo_1 -10;

		Xo_2 = 0; 
		Zo_2 = -10;

		Xtor_1 = -1000;
		Ztor_1 = -10;

		Xd_1 = 8;
		Zd_1 = -10;

		Xi_1 = 16;
		Zi_1 = -10;

		Xl_1 = -1000;
		Yl_1 = 80;
		Zl_1 -15;

		Xl_2 = -1000;
		Yl_2 = 80;
		Zl_2 = -15;

		Xp_1 = -1000;
		Zp_1 = -10;
    
t_1(Xt_1, Zt_1);
t_2(Xt_2, Zt_2);
c_1(Xc_1, Zc_1);
o_1(Xo_1, Zo_1);
o_2(Xo_2, Zo_2);
tor_1(Xtor_1,Ztor_1);
d_1(Xd_1, Zd_1);
i_1(Xi_1, Zi_1);
l_1(Xl_1, Yl_1, Zl_1);
l_2(Xl_2, Yl_2, Zl_2);
p_1(Xp_1, Zp_1);

scene.add(octahedron1);
scene.add(torus);
scene.add(tetrahedron1);
scene.add(tetrahedron2);
scene.add(cube);
scene.add(octahedron2);
scene.add(icosahedron);
scene.add(dodecahedron);
scene.add(tube1);
scene.add(tube2);
scene.add(pentPrism);

function t_1 (x, z){
	var tetra = new THREE.TetrahedronGeometry(2.25);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	tetrahedron1 = new THREE.Mesh(tetra, material);
	tetrahedron1.position.x = x;
	tetrahedron1.position.z = z;
}
function t_2 (x, z){
	var tetra = new THREE.TetrahedronGeometry(2.25);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	tetrahedron2 = new THREE.Mesh(tetra, material);
	tetrahedron2.position.x = x;
	tetrahedron2.position.z = z;
}
function c_1 (x, z){
	var box = new THREE.BoxGeometry(3,3,3);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	cube = new THREE.Mesh(box, material);
	cube.position.x = x;
	cube.position.z = z;
}
function o_1 (x, z){
	var octa = new THREE.OctahedronGeometry(5);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	octahedron1 = new THREE.Mesh(octa, material);
	octahedron1.position.x = x;
	octahedron1.position.z = z;
}
function o_2 (x, z){
	var octa2 = new THREE.OctahedronGeometry(2.5);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	octahedron2 = new THREE.Mesh(octa2, material);
	octahedron2.position.x = x;
	octahedron2.position.z = z;
}
function tor_1 (x, z){
	var object = new THREE.TorusGeometry(8, 0.1, 16, 100);
	var material = new THREE.MeshLambertMaterial( {color: 0xc15aed});
	torus = new THREE.Mesh(object, material);
	torus.rotation.x = x;
	torus.position.z = z;
}
function d_1 (x, z){
	var dodeca = new THREE.DodecahedronGeometry(2.5);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	dodecahedron = new THREE.Mesh(dodeca, material);
	dodecahedron.position.x = x;
	dodecahedron.position.z = z;
}
function i_1 (x, z){
	var icosa = new THREE.IcosahedronGeometry(2.25);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	icosahedron = new THREE.Mesh(icosa, material);
	icosahedron.position.x = x;
	icosahedron.position.z = z;
}
function l_1 (x, y, z) {
	var cylinder = new THREE.CylinderGeometry( 0.25, 0.25, 100, 6 );
	var material = new THREE.MeshLambertMaterial( {color: 0xc15aed} );
	tube1 = new THREE.Mesh(cylinder, material);
	tube1.position.x = x;
	tube1.position.y = y;
	tube1.position.z = z;
}
function l_2 (x, y, z) {
	var cylinder = new THREE.CylinderGeometry( 0.25, 0.25, 100, 6 );
	var material = new THREE.MeshLambertMaterial( {color: 0xc15aed} );
	tube2 = new THREE.Mesh(cylinder, material);
	tube2.position.x = x;
	tube2.position.y = y;
	tube2.position.z = z;
}
function p_1 (x, z){
	var geometry = new THREE.CylinderGeometry( 2, 2, 5, 5 );
	var material = new THREE.MeshNormalMaterial();
	pentPrism = new THREE.Mesh(geometry, material);
	pentPrism.position.x = x;
	pentPrism.position.z = z;
}

var animate = function() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);

		tube1.position.y += -0.1;
		tube2.position.y += -0.1;

		tetrahedron1.rotation.x += 0.005;
		tetrahedron1.rotation.z += 0.005;

		tetrahedron2.rotation.x += 0.005;
		tetrahedron2.rotation.z += 0.005;

		cube.rotation.x += 0.005;
		cube.rotation.z += 0.005;

		octahedron1.rotation.x += 0.005;
		octahedron1.rotation.z += 0.005;

		octahedron2.rotation.x += 0.005;
		octahedron2.rotation.z += 0.005;

		dodecahedron.rotation.x += 0.005;
		dodecahedron.rotation.z += 0.005;

		icosahedron.rotation.x += 0.005;
		icosahedron.rotation.z += 0.005;

		torus.rotation.y += 0.008;

		pentPrism.rotation.x += 0.008;
		pentPrism.rotation.z += 0.008;
}

animate();
