var sceneData;
var currentScene = 0;
var scenes = [];
var t;

function preload() {
  sceneData = loadJSON('scenes.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  CreateScenesFromData(sceneData.scenes);
  background(255);
    t = 0;
}

function draw() {
  scenes[currentScene].display();

}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText, data[i].nextScene, data[i].NCo, data[i].xNum, data[i].radNum))
  }
}

function Scene(sceneText, nextScene, NCo, xNum, radNum) {
  this.sceneText = sceneText;
  this.nextScene = nextScene;
  this.NCo = NCo;
  this.xNum = xNum;
  this.radNum = radNum;


  this.display = function() {
    stroke(0, 140, 168, 10);
    fill(0, 140, 168)
    textSize(32);
    text(this.sceneText, 100, 100);

    noFill();
    translate(width/2, height/2);
    beginShape();
    for (var i = 0; i < 200; i++) {
      var ang = map(i, 0, 200, 0, PI);
      var rad = this.radNum * noise(i * 0.01, t * 0.005);
      var x = rad * cos(ang);
      var y = rad * sin(ang);
      var N = noise(i * 0.5 * this.radNum);
      curveVertex(x * 5, y * N*this.NCo);
    }
    endShape(CLOSE);

    beginShape();
    for (var i = 0; i < 200; i++) {
      var ang = map(i, 0, 200, 0, -PI);
      var rad = this.radNum * noise(i * 0.01, t * 0.005);
      var x = rad * cos(ang);
      var y = rad * sin(ang);
      var N = noise(i * 0.5 * this.radNum);
      curveVertex(x * 5, y * N*this.NCo);
    }
    endShape(CLOSE);

    t += 1;
  }

}

function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScene[numberPressed-1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}