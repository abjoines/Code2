var currentScene = 0;
var scenes = [];
var keyOn = false;

var sceneState ={
	HOME: 0,
	PLATONIC: 1,
	DUALS: 2,
	EULER: 3
}

var currentState = sceneState.HOME;


//THREE JS

		var renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), anitalias: true}); 
		renderer.setClearColor(0x000000);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		
		drawScene(currentState);
		checkTransition(currentState);

function drawScene(whichScene){
	switch (currentState) {

		case sceneState.HOME:
			camera1();
			lights();

			var octa = new THREE.OctahedronGeometry(5);
			var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
			var octahedron = new THREE.Mesh(octa, material);
			octahedron.position.z = -10;

			var object = new THREE.TorusGeometry(8, 0.1, 16, 100);
			var material = new THREE.MeshLambertMaterial( {color: 0xc15aed});
			var torus = new THREE.Mesh(object, material);
			torus.position.z = -10;
			torus.rotation.x = -45;

			scene.add(octahedron);
			scene.add(torus);

		break;

		case sceneState.PLATONIC:
			camera1();
			lights();
			tetra(-16, -10);
			cube(-8, -10);
			octa(0, -10);
			dodeca(8, -10);
			icosa(16, -10)

			scene.add(tetrahedron);
			scene.add(cube);
			scene.add(octahedron);
			scene.add(dodecahedron);
			scene.add(icosahedron);

		break;

		case sceneState.DUALS:
			camera1();
			lights();

			tetra(-24, -15);
			tetra(-16, -15);
			cube(-4, -15);
			octa(4, -15);
			dodeca(16, -15);
			icosa(24, -15);
			tube(-10, 80, -15);
			tube(10, 80, -15);

			scene.add(tetrahedron);
			scene.add(tetrahedron);
			scene.add(cube);
			scene.add(octahedron);
			scene.add(dodecahedron);
			scene.add(icosahedron);
			scene.add(tube);
			scene.add(tube);

		break;

		case sceneState.EULER: 
			camera1();
			lights();
			pentPrism(-10, -10);
			scene.add(pentPrism);

		break;

	}
}

function checkTransition(whichScene) {
	switch (whichScene) {
		
		case sceneState.HOME:
			if(keyOn) {
				currentState++;
				setUpScene(currentState);
			}
		break;

		case sceneState.PLATONIC:
			if(keyOn) {
				currentState++;
				setUpScene(currentState);
			}
		break;

		case sceneState.DUALS:
			if(keyOn) {
				currentState++;
				setUpScene(currentState);
			}
		break;

		case sceneState.EULER:
			if(keyOn) {
				currentState++;
				setUpScene(currentState);
			}
		break;
	}
}

function setUpScene(whichScene) {
	switch(whichScene) {
		case sceneState.HOME:
			break;
		case sceneState.PLATONIC:
			break;
		case sceneState.DUALS:
			break;
		case sceneState.EULER:
			break;
	}
}

function keyPressed() {

  keyOn = true;

}

//FUNCTIONS

//CAMERA & LIGHTING

function camera1(){
		var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
			camera.position.z = 5			
		var scene = new THREE.Scene();
	}

function lights() {
		var light = new THREE.AmbientLight(0xffffff, 0.25);
		scene.add(light);
		var light1 = new THREE.PointLight(0xffffff, .9);
		scene.add(light1);
	}

//GEOMETRIES - ALL

function tetra (x, z){
		var tetra = new THREE.TetrahedronGeometry(2.25);
		var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
		var tetrahedron = new THREE.Mesh(tetra, material);
		tetrahedron.position.x = x;
		tetrahedron.position.z = z;
	}

function cube (x, z){
		var box = new THREE.BoxGeometry(3,3,3);
		var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
		var cube = new THREE.Mesh(box, material);
		cube.position.x = x;
		cube.position.z = z;
}

function octa (x, z){
		var octa = new THREE.OctahedronGeometry(2.5);
		var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
		var octahedron = new THREE.Mesh(octa, material);
		octahedron.position.z = x;
		octahedron.position.z = z;
}

function dodeca (x, z){
		var dodeca = new THREE.DodecahedronGeometry(2.5);
		var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
		var dodecahedron = new THREE.Mesh(dodeca, material);
		dodecahedron.position.x = x;
		dodecahedron.position.z = z;
}

function icosa (x, z){
		var icosa = new THREE.IcosahedronGeometry(2.25);
		var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
		var icosahedron = new THREE.Mesh(icosa, material);
		icosahedron.position.x = x;
		icosahedron.position.z = z;
}


function tube (x, y, z) {
		var cylinder = new THREE.CylinderGeometry( 0.25, 0.25, 100, 6 );
		var material = new THREE.MeshLambertMaterial( {color: 0xc15aed} );
		var tube1 = new THREE.Mesh(cylinder, material);
		tube.position.x = x;
		tube.position.y = y;
		tube.position.z = z;
}

function pentPrism (x, z){
	var geometry = new THREE.CylinderGeometry( 2, 2, 5, 5 );
	var material = new THREE.MeshNormalMaterial( {color: 0x25d2f9} );
	var pentPrism = new THREE.Mesh(geometry, material);
	pentPrism.position.x = x;
	pentPrism.position.z = z;
}

//ANIMATION

	var animate = function() {

		requestAnimationFrame( animate );

			tube.position.y += -0.1;

			tetrahedron.rotation.x += 0.005;
			tetrahedron.rotation.z += 0.005;

			cube.rotation.x += 0.005;
			cube.rotation.z += 0.005;

			octahedron.rotation.x += 0.005;
			octahedron.rotation.z += 0.005;

			dodecahedron.rotation.x += 0.005;
			dodecahedron.rotation.z += 0.005;

			icosahedron.rotation.x += 0.005;
			icosahedron.rotation.z += 0.005;

			torus.rotation.y += 0.008;

			pentPrism.rotation.x += 0.008;
			pentPrism.rotation.z += 0.008;

			renderer.render(scene, camera);

			}

		animate();
