// code 2
// section a
// bfa dt
// spring 2018
// bryan ma

// week 5
// choose your own adventure data

// scene data model: 

// {
//   sceneText: '', //the scene text
//   options: [], // the text options to choose
//   nextScenes: []  // the target scene based on the previous options
// }

var sceneData;
var currentScene = 0;
var scenes = [];
var img;

function preload() {
  sceneData = loadJSON('scenes.json');
}

function setup() {
  createCanvas(800, 800);
  CreateScenesFromData(sceneData.scenes);
  img = loadImage("img/rainbow.png");
}

function draw() {

  scenes[currentScene].display();

  scenes[currentScene].tint(); 
  image(img, 0, 0);
  
  fill(0);
  textSize(24);
  text("press the option number to advance to the indicated scene", 50, 700);
}

function CreateScenesFromData(data) {
  for (var i = 0; i < data.length; i++) {
    scenes.push(new Scene(data[i].sceneText, data[i].options, data[i].nextScenes, data[i].r, data[i].g, data[i].b, data[i].tintVal))
  }
}

function Scene(sceneText, options, nextScenes, r, g, b, tintVal) {
  this.sceneText = sceneText;
  this.options = options;
  this.nextScenes = nextScenes;
  this.r = r;
  this.g = g;
  this.b = b;
  this.tintVal = tintVal;


  this.display = function() {
    background(this.r, this.g, this.b);
    fill(0);
    textSize(32);
    text(this.sceneText, 100, 100);

    for (var i = 0; i < options.length; i++) {
      text('PRESS ' + (i + 1) + ': ' + this.options[i], 150, 200 + i * 50);
    }
  }

  this.tint = function() {
    tint(255,this.tintVal);
  }

}

function keyPressed() {
  var numberPressed = parseInt(key);
  var newScene = scenes[currentScene].nextScenes[numberPressed - 1];
  if (newScene !== undefined) {
    currentScene = newScene;
  }
}