var home;
var solilds;
var title;

var homeStuff;
var solidsStuff;
var titles;

var homeRenderer;
var solidsRrenderer;
var homeScene
var solidsScene;

//XMLHTTPRequest

var request;
request = new XMLHttpRequest();
request.open('GET', 'scenes.json', true);

request.onload = function(event) {
  allTheData = JSON.parse(event.target.responseText);
    for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].title, data[i].x, data[i].z, data[i].r))
  }
	parseDOM();
	displayText();
	displayHome();
	displaySolids();
}
request.send();

function parseDOM () {
	home = document.getElementById('home');

	solids = document.getElementById('solids');

	title = document.getElementById('title');
}


function displayTitle () {
	title.innerHTML = titles[index];
}


//camera and lights
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
	camera.position.z = 5	

var light = new THREE.AmbientLight(0xffffff, 0.25);
var light1 = new THREE.PointLight(0xffffff, .9);


//HOME
function displayHome () {

//render home scene
	homeRenderer = new THREE.WebGLRenderer({antialias: true}); 
	homeRenderer.setClearColor(0x000000);
	homeRenderer.setPixelRatio(window.devicePixelRatio);
	homeRenderer.setSize(window.innerWidth, window.innerHeight);

	home.appendChild(homeRenderer.domElement);

	homeScene = new THREE.Scene();
	homeScene.add(light);
	homeScene.add(light1);

//geometries
	var homeOcta = new THREE.OctahedronGeometry(scenes[0].r);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	bigO = new THREE.Mesh(homeOcta, material);
	bigO.position.x = scenes[0].x[0];
	bigO.position.z = scenes[0].z;

	homeScene.add(bigO);

	var objectT = new THREE.TorusGeometry(8, 0.1, 16, 100);
	var material = new THREE.MeshLambertMaterial( {color: 0xc15aed});
	ring = new THREE.Mesh(objectT, material);
	ring.rotation.x = scenes[0].x[1];
	ring.position.z = scenes[0].z;

	homeScene.add(torus);
}


//PLATONIC SOLIDS/DUALS
function displaySolids () {

    solidsRrenderer = new THREE.WebGLRenderer({antialias: true}); 
	solidsRenderer.setClearColor(0x000000);
	solidsRenderer.setPixelRatio(window.devicePixelRatio);
	solidsRenderer.setSize(window.innerWidth, window.innerHeight);

	solids.appendChild(solidsRenderer.domElement);

	solidsScene = new THREE.Scene();
	solidsScene.add(light);
	solidsScene.add(light1);

//geometries
	var solidsT = new THREE.TetrahedronGeometry(scenes[1].r[0]);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	t_1 = new THREE.Mesh(solidsT, material);
	t_1.position.x = scenes[1].x[0];
	t_1.position.z = scenes[1].z;

	solidsScene.add(t_1);

	var solidsC = new THREE.BoxGeometry(scenes[1].r[2],scenes[1].r[2],scenes[1].r[2]);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	c_1 = new THREE.Mesh(solidsC, material);
	c_1.position.x = scenes[1].x[1];
	c_1.position.z = scenes[1].z;

	solidsScene.add(c_1);

	var solidsO = new THREE.OctahedronGeometry(scenes[1].r[1]);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	o_2 = new THREE.Mesh(solidsO, material);
	o_2.position.x = scenes[1].x[2];
	o_2.position.z = scenes[1].z;

	solidsScene.add(o_2);

	var solidsD = new THREE.DodecahedronGeometry(scenes[1].r[1]);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	d_1 = new THREE.Mesh(solidsD, material);
	d_1.position.x = scenes[1].x[3];
	d_1.position.z = scenes[1].z;

	solidsScene.add(d_1);

	var solidsI = new THREE.IcosahedronGeometry(scenes[1].r[0]);
	var material = new THREE.MeshLambertMaterial( {color: 0x25d2f9});
	i_1 = new THREE.Mesh(solidsI, material);
	i_1.position.x = scenes[1].x[4];
	i_1.position.z = scenes[1].z;

	solidsScene.add(i_1);
}


var animate = function() {
	requestAnimationFrame(animate);
	homeRenderer.render(homeScene, camera);
	solidsRenderer.render(solidsScene, camera);

		t_1.rotation.x += scenes[1].xR;
		t_1.rotation.z += scenes[1].zR;

		c_1.rotation.x += scenes[1].xR;
		c_1.rotation.z += scenes[1].zR;

		bigO.rotation.x += scenes[0].xR;
		bigO.rotation.z += scenes[0].zR;

		o_2.rotation.x += scenes[1].xR;
		o_2.rotation.z += scenes[1].zR;

		d_1.rotation.x += scenes[1].zR;
		d_1.rotation.z += scenes[1].zR;

		i_1.rotation.x += scenes[1].xR;
		i_1.rotation.z += scenes[1].zR;

		ring.rotation.y += scenes[0].yR;
}

animate();



