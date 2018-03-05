// code 2
// section a
// bfa dt
// spring 2018
// bryan ma

// week 5
// saving/loading paint data
// based on example by Jon Beilin

var paintmarks = [];
var treemarks = [];

var paintDataFile = 'paintData.json';

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0,60,0);

  for (var i = 0; i < paintmarks.length; i++) {
    paintmarks[i].display();
  }
    for (var j = 0; j < treemarks.length; j++) {
    treemarks[j].display();
  }

  fill(0);
  textSize(24);
  text("Drag the mouse across the canvas to draw a stream.", 50, 540);
  text("Click the mouse across the canvas to draw trees.", 50, 570);
  text("press 'S' to save a json file with the current paint data.", 50, 600);
  text("press 'L' to load a json file from your computer.", 50, 630);
}

function PaintMark(position) {
  this.position = position;

  this.display = function() {
    noStroke();
    fill(5, 198, 179);
    ellipse(this.position.x, this.position.y, 10, 10);
  }

}

function treeMark(position) {
  this.position = position;

  this.display = function() {
    noStroke();
    fill(250, 150, 0);
    rect(this.position.x-5, this.position.y, 10, 10);
    fill(0, 150, 0);
    triangle(this.position.x - 10, this.position.y, this.position.x, this.position.y - 30, this.position.x + 10, this.position.y);
  
  }

}

function mouseClicked() {
  treemarks.push(new treeMark(createVector(mouseX, mouseY)));
}

function mouseDragged() {
  paintmarks.push(new PaintMark(createVector(mouseX, mouseY)));
}

function keyPressed() {
  if (key === 'S') {
    savePaintData();
  }
  if (key === 'L') {
    loadPaintData();
  }

}

function savePaintData() {
  positionsToSave = [];
  for (var i = 0; i < paintmarks.length; i++) {
    positionsToSave.push(
      { 
        x: paintmarks[i].position.x, 
        y: paintmarks[i].position.y
      }
    );
  }
  for (var j = 0; j < treemarks.length; j++) {
    positionsToSave.push(
      { 
        x: treemarks[j].position.x,
        y: treemarks[j].position.y
      }
    );
  }

  saveJSON(positionsToSave, 'paintData.json');
}

function loadPaintData() {
  loadJSON(paintDataFile, parsePaintData);
}

function parsePaintData(data) {
  paintmarks = [];
  treemarks = [];

  for (var i = 0; i < data.length; i++) {
    paintmarks.push(new PaintMark(createVector(data.paintmarks[i].x, data.paintmarks[i].y)));
  }

  for (var j = 0; j < data.length; j++) {
    treemarks.push(new treeMark(createVector(data.treemarks[j].x, data.treemarks[j].y)));
  }


}