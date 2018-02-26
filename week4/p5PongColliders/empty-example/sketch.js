// code 2
// section a
// bfa dt
// spring 2018
// bryan ma

// week 4
// pong with all colliders

var ball;
var p1, p2;
var p1Score = 0;
var p2Score = 0;
var p1Up = false;
var p1Down = false;
var p2Up = false;
var p2Down = false;
var margin = 20;
var cnv;
var colliders = [];
var keyOn = false;

//added state stuff
var sceneState = {
  START: 0,
  ELLIE: 1,
  ALYSSAFORREST: 2,
  JACKIE: 3,
  END: 4
};

var currentState = sceneState.START;
//end added state stuff

function preload() {

}

function windowResized() {
  centerCanvas();
}

function setup() {
  cnv = createCanvas(900, 500);
  centerCanvas();
  ball = new Ball();
  p1 = new Paddle(0);
  p2 = new Paddle(1);

}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  //cnv.position(x, y);
}

function draw() {

  drawScene(currentState);
  checkTransition(currentState);
  KeyOn = false;

}

//SCENE STATE STUFF
function drawScene(whichScene) {
  switch (currentState) {

    case sceneState.START:
          background(0);
          drawField();

          text("PRESS ANY KEY TO START", width/2, height/2);

      break;
    case sceneState.ELLIE:
          background(0);
          drawField();

          p1.move(p1Up, p1Down);
          p2.move(p2Up, p2Down);

          ball.update();
          p1.update();
          p2.update();
          for (var i = 0; i < colliders.length; i++) {
            Ellie.update();
          }

          p1.display();
          p2.display();

          for (var i = 0; i < colliders.length; i++) {
            Ellie[i].display();
          }

          ball.display(); 

          checkCollisionWithBall(ball, p1);
          checkCollisionWithBall(ball, p2);

          for (var i = 0; i < colliders.length; i++) {
            checkCollisionWithBall(ball, colliders[i]);
          }

        function Ellie() {
          this.pos =  createVector(100, 100);
          this.speed = 1;
          this.angle = 0;
          this.vel =  createVector(cos(this.angle) * this.speed, sin(this.angle) * this.speed);
          this.width = 100;
          this.height = 80;
          this.c = color(200, 90, 10);

          this.update = function() {
            this.pos.add(this.vel);

          }

          this.display = function() {
            // draw something here
            fill(this.c);
            rect(this.pos.x, this.pos.y, this.width, this.height);

          }

          this.collided = function(other) {
            // do something cool here! do something to yourself,
            // and also something to the other thing?
            other.size = 3;
            other.vel.x *= 1;
            this.c = color(200, 5, 100);
          }
        }


      break;
    case sceneState.ALYSSAFORREST:
          background(0);
          drawField();

          p1.move(p1Up, p1Down);
          p2.move(p2Up, p2Down);

          ball.update();
          p1.update();
          p2.update();
          for (var i = 0; i < colliders.length; i++) {
            colliders[i].update();
          }

          p1.display();
          p2.display();

          for (var i = 0; i < colliders.length; i++) {
            colliders[i].display();
          }

          ball.display(); 

          checkCollisionWithBall(ball, p1);
          checkCollisionWithBall(ball, p2);

          for (var i = 0; i < colliders.length; i++) {
            checkCollisionWithBall(ball, colliders[i]);
          }

      function AlyssaForrest() {
          this.pos = createVector(width/2, height/2);
          this.speed = 0;
          this.angle = 0;
          this.vel = createVector(cos(this.angle) * this.speed, sin(this.angle) * this.speed);
          this.height = 0;
          this.width = 0;

          this.update = function() {
            this.pos.add(this.vel);
            if (this.height < height-40){
            this.height = this.height + 0.5;
            this.width = this.width + 0.5;
            } else {
            this.height = this.height;
            this.width = this.width;
            }
          }

          this.display = function() {
            fill(255,0,0);
            ellipse(this.pos.x, this.pos.y, this.width, this.height);
          }

          this.collided = function(other) {
            other.vel.x *= -1;

            this.width = this.width - 5;
            this.height = this.height - 5;
          }
        }

      break;
    case sceneState.JACKIE:
          background(0);
          drawField();

          p1.move(p1Up, p1Down);
          p2.move(p2Up, p2Down);

          ball.update();
          p1.update();
          p2.update();
          for (var i = 0; i < colliders.length; i++) {
            colliders[i].update();
          }

          p1.display();
          p2.display();

          for (var i = 0; i < colliders.length; i++) {
            colliders[i].display();
          }

          ball.display(); 

          checkCollisionWithBall(ball, p1);
          checkCollisionWithBall(ball, p2);

          for (var i = 0; i < colliders.length; i++) {
            checkCollisionWithBall(ball, colliders[i]);
          }

      function Jackie() {
          this.pos = createVector(0, 0);
          this.width = 25;
          this.height = 25;
          this.time = 0;

          this.update = function() {
            this.time += .03;
            this.pos.x = (200*sin(this.time)) + (width/2)
            this.pos.y = (200*cos(this.time)) + (height/2)
          }

          this.display = function(){
            rect(this.pos.x - this.width/2, this.pos.y - this.height/2, this.width, this.height);
          }
          
          this.collided = function(other){
            if (other.speed > 1) {
              other.speed += random(-2, 0);
            }
            colliders.push(new Jackie());

            other.vel.x = -other.vel.x;
            other.pos.x += other.vel.x;
            other.vel.y = -other.vel.y;
            other.pos.y += other.vel.y;
          }
        }
      break;
    case sceneState.END:
            background(0);
            drawField();
            text("GAME OVER", width/2, height/2);

      break;
  }

}

function checkTransition(whichScene) {
  switch (whichScene) {
    case sceneState.START:
        if (keyOn){
          currentState++;
          setUpScene(currentState);
        }
      break;
        case sceneState.ELLIE:
        if((p1Score++) || (p2Score++)){
          currentState++;
          setUpScene(currentState);
        }
      break;
    case sceneState.ALYSSAFORREST:
        if((p1Score++) || (p2Score++)){
          currentState++;
          setUpScene(currentState);
        }
      break;
    case sceneState.JACKIE:
        if((p1Score++) || (p2Score++)){
          currentState++;
          setUpScene(currentState);
        }
      break;
    case sceneState.END:
      // if(keyOn){
      //   currentState = 0;
      //   setUpScene(currentState);
      // }
      break;
  }
}

function setUpScene(whichScene) {
  switch(whichScene) {
    case sceneState.START:
      break;
    case sceneState.ELLIE:
      break;
    case sceneState.ALYSSAFORREST:
      break;
    case sceneState.JACKIE:
      break;
    case sceneState.END:
      break;
  }
}

//NOT STATE STUFF
function drawField() {
  stroke(255);
  noFill();
  line(0, margin, width, margin);
  line(0, height - margin, width, height - margin);
  for (var i = margin; i < height - margin - 15; i += 35) {
    var start = i;
    var finish = start + 15;
    line(width/2, start, width/2, finish);
  }

  fill(255);
  noStroke();
  textSize(64);
  textAlign(CENTER, CENTER);
  text(p1Score, width/2-50, 70);
  text(p2Score, width/2+50, 70);

}


function checkCollisionWithBall(ball, other) {
  if (ball.pos.x + ball.width/2 > other.pos.x && 
      ball.pos.x + ball.width/2 < other.pos.x + other.width && 
      ball.pos.y + ball.height/2 > other.pos.y &&
      ball.pos.y + ball.height/2 < other.pos.y + other.height) {
    ball.collided(other);
    other.collided(ball);
  }
}


function Ball() {
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(0, 0);
  this.angle = random(TWO_PI);
  this.speed = 7;
  this.vel.x = cos(this.angle) * this.speed;
  this.vel.y = sin(this.angle) * this.speed;
  this.width = 15;
  this.height = 15;

  this.update = function() {
    if (this.pos.x < -this.width) {
      p2Score++;
      this.resetAfterPoint(0);
    } else if (this.pos.x > width) {
      p1Score++;
      this.resetAfterPoint(1);
    }

    if (this.pos.y < margin || 
        this.pos.y > height - margin - this.height) {
      this.vel.y *= -1;
    }

    this.pos.add(this.vel);
  };

  this.display = function() {
    noStroke();
    fill(255);
    rectMode(CORNER);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }

  this.resetAfterPoint = function(whichPlayer) {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.speed = 7;
    if (whichPlayer === 1) {
      this.getStartingAngle(4 * PI/6, 8 * PI/6);
    } else if (whichPlayer === 0) {
      this.getStartingAngle(-PI/3, PI/3);
    }
  }

  this.getStartingAngle = function(angleLow, angleHigh) {  
    var angle = random(angleLow, angleHigh);
    this.vel.x = cos(angle) * this.speed;
    this.vel.y = sin(angle) * this.speed;
  }

  this.collided = function(other) {
    
  }
};


function Paddle(num) {
  this.num = num;
  this.width = 15;
  this.height = 80;
  if (num == 0) {
    this.pos = createVector(margin, height/2);
  } else {
    this.pos = createVector(width-this.width-margin, height/2);
  }
  this.vel = createVector(0, 0);

  this.update = function() {
    this.pos.add(this.vel);
  }

  this.display = function() {
    noStroke();
    fill(255);
    rectMode(CORNER);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }

  this.move = function(up, down) {
    this.vel.y = 0;
    if (up) {
      if (this.pos.y > margin) {
        this.vel.y = -5;
      } else {
        this.pos.y = margin;
      } 
    }
    if (down) {
      if (this.pos.y + this.height < height - margin) {
        this.vel.y = 5;
      } else {
        this.pos.y = height - this.height - margin;
      }
    } 
  }

  this.collided = function(other) {
    var diff = (other.pos.y + other.height/2) - this.pos.y;
    if (this.num === 0) {
      angle = map(diff, 0, this.height, -PI/3, PI/3);
    }
    if (this.num === 1) {
      angle = map(diff, this.height, 0, 4*PI/6, 8*PI/6);
    }
    other.speed += 1;
    other.vel.x = cos(angle) * other.speed;
    other.vel.y = sin(angle) * other.speed;
  }
}


function keyPressed() {

  keyOn = true;

  if (key === 'W') {
    p1Up = true;
  }
  if (key === 'S') {
    p1Down = true;
  }

  if (keyCode === UP_ARROW) {
    p2Up = true;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = true;
  }
}

function keyReleased() {

  // keyOn = false;

  if (key === 'W') {
    p1Up = false;
  }
  if (key === 'S') {
    p1Down = false;
  }

  if (keyCode === UP_ARROW) {
    p2Up = false;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = false;
  }
}


