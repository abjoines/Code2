//setting the scene, camera, WebGL renderer
		var scene = new THREE.Scene();

		var renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(renderer.domElement);

		var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
			camera.position.z = 5

//geometries
			var radius = 50;
			var wSegments = 5;
			var hSegments = 5;

			var cubeGeometry = new THREE.BoxGeometry(radius, wSegments, hSegments);
			var cubeMaterial = new THREE.MeshLambertMaterial( {color: 0x0000ff});
		var cube = new THREE.Mesh( cubeGeometry, cubeMaterial);
			cube.position.z = -10;

			var coneGeometry = new THREE.ConeGeometry( 3, 15, 16 );
			var coneMaterial = new THREE.MeshLambertMaterial( {color: 0xffffff} );
			var cone = new THREE.Mesh( coneGeometry, coneMaterial );

			cone.position.z = -11;

//lighting
		var	light = new THREE.AmbientLight(0xcccccc,0.4);
		var	plight = new THREE.PointLight(0xffffff,0.8);

//adding to scene
		scene.add(light);
		scene.add(plight);
		scene.add(camera);
		scene.add(cube);
		scene.add(cone);

//animating geometries
		var animate = function() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cone.rotation.z += 0.01;

				renderer.render( scene, camera );
			}

		animate();
