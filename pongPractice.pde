float ypos1 = height/2;
float ypos2 = height/2;
float paddleX = 10;
float paddleY = 80;

float speedOfPaddle = 8;

float ballX = 250;
float ballY = 250;
float ballXSpeed;
float ballYSpeed;
float ballSize = 20;

boolean p1Up = false;
boolean p1Down = false;
boolean p2Up = false;
boolean p2Down = false;

void setup() {
  size(500, 500);
  background(0);
  ballXSpeed = random (-6,6);
  ballYSpeed = random (-3,3);
}

void draw() {
  stroke(255);
  strokeWeight(3);
  line(width/2, 0, width/2, 500);
  
  stroke(0);
  rectMode(CENTER);
  fill(0,255,255);
  
//left paddle
  rect(20, ypos1, paddleX, paddleY);
//right paddle
  rect(width-20, ypos2, paddleX, paddleY);

//paddle movement
  if (p1Up == true) {
    ypos1 -= speedOfPaddle;
  }
  if (p1Down == true) {
    ypos1 += speedOfPaddle;
  }

  if (p2Up == true) {
    ypos2 -= speedOfPaddle;
  }
  if (p2Down == true) {
    ypos2 += speedOfPaddle;
  }
  
//ball
  fill(255);
  stroke(0,255,255);
  float weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  
  ballX += ballXSpeed;
  ballY += ballYSpeed;
  rect(ballX, ballY, ballSize, ballSize);

//top & bottom hit detection
  if ((ballY > height) || (ballY < 0)) {
    ballYSpeed *= -1;
  }
  
//restart
  if((ballX > width) || (ballX < 0)) {
    ballX = 250;
    ballY = 250;
    background(0);
  }
  
//paddle collision detections
  if((ballX <= 20)
  &&(ballY >= ypos1 - paddleY/2)
  &&(ballY <= ypos1 + paddleY/2)){
    ballXSpeed *= -1;
  }
  if((ballX >= width-20)
  &&(ballY >= ypos2 - paddleY/2)
  &&(ballY <= ypos2 + paddleY/2)){
    ballXSpeed *= -1;
  }
}

void keyPressed() {
  if (key == 'w') {
    p1Up = true;
  }
  if (key == 's') {
    p1Down = true;
  }
  if (key == CODED) {
    if (keyCode == UP) {
      p2Up = true;
    }
    if (keyCode == DOWN) {
      p2Down = true;
    }
  }
}

void keyReleased() {
  if (key == 'w') {
    p1Up = false;
  }
  if (key == 's') {
    p1Down = false;
  }
  if (key == CODED) {
    if (keyCode == UP) {
      p2Up = false;
    }
    if (keyCode == DOWN) {
      p2Down = false;
    }
  }
}