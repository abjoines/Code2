
var ball = {
	x : 250,
	y : 250,
	diameter : 20,
	speedX : 5,
	speedY : 5,
};

var paddleSpeed = 12;

var speedX = 5;
var speedY = 5;

var leftPaddle = {
	x : 20,
	y : 250,
	w : 10,
	h : 80,
};

var rightPaddle = {
	x : 480,
	y : 250,
	w : 10,
	h : 80,
};

var p1Up = false;
var p1Down = false;
var p2Up = false;
var p2Down = false;


function setup() {
	createCanvas(500, 500);
	background(0);
}

function draw() {

	Ball();
	PaddleL();
	PaddleR();
	//hitDetection();

}

function Ball() {

	fill(255);
	ellipse(ball.x, ball.y, ball.diameter, ball.diameter);

	ball.x = ball.x + speedX;
    ball.y = ball.y + speedY;
}

function PaddleL() {

	fill(255);
	rect(leftPaddle.x, leftPaddle.y, leftPaddle.w, leftPaddle.h);

}

function PaddleR() {

	fill(255);
	rect(rightPaddle.x, rightPaddle.y, rightPaddle.w, rightPaddle.h);	

}

// function hitDetection() {


// }


function keyPressed() {
  if (key === 'w') {
    p1Up = true;
  }
  if (key === 's') {
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
  if (key === 'w') {
    p1Up = false;
  }
  if (key === 's') {
    p1Down = false;
  }
  if (keyCode === UP_ARROW) {
    p2Up = false;
  }
  if (keyCode === DOWN_ARROW) {
    p2Down = false;
  }
}


/*hit detection stuff 
		//top bottom
		if ((ball.y > height) || (ball.y < 0)) {
    		ball.speedY *= -1;
  		} 	

		//reset
  		if ((ball.x > width) || (ball.x < 0)) {
    		ball.x = 250;
    		ball.y = 250;
    		background(0);
  		}

  		//paddle collisions
  		if((ball.x <= 20)
    		&&(ball.y >= leftPaddle.y - leftPaddle.h/2) 
    		&&(ball.y <= leftPaddle.y + leftPaddle.h/2)){
     			ball.speedX *= -1;
     		}

    	else if((ball.x >= 480) {
    		&&(ball.y >= rightPaddle.y - rightPaddle.h/2) 
    		&&(ball.y <= rightPaddle.y + rightPaddle.h/2)){
     			ball.speedX *= -1;
     		}
     		*/
     		
