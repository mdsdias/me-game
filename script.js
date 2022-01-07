let numSegments = 10;
let player;
const diff = 10;
let sky;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  stroke(255);
  strokeWeight(10);
  player = new Player();
  loadImage('assets/laDefense.jpg', img => {
    image(img, 0, 0);
  });
}

function draw() {
  background(0);
  if (player.y < width || player.x < width) {
	  if (keyIsDown(LEFT_ARROW) || keyIsDown(65) ) {
	    player.x -= diff;
	  }
	
	  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68) ) {
	    player.x += diff;
	  }
	
	  if (keyIsDown(UP_ARROW) || keyIsDown(87) ) {
	    player.y -= diff;
	  }
	
	  if (keyIsDown(DOWN_ARROW) || keyIsDown(83) ) {
	    player.y += diff;
	  }
  }
  player.display();
}

function keyPressed() {
  switch (key) {
	  case 'e':
		  playerUse(player.y, player.x);
  }
}

function playerUse(y, x) { 
	if ()
}

class Player {
	constructor () {
		this.x = 250;
		this.y = 250;
	}
	display() {
		ellipse(this.x,this.y,40,40);
	}
}