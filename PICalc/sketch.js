var r=200;

var rec =0.0;
var cir=0.0;

function setup() {
  createCanvas(402,402);
	background(0);
	translate(width/2,height/2);

	stroke(255);
	noFill();
	ellipse(0,0,r*2,r*2);
	rectMode(CENTER);
	rect(0,0,r*2,r*2);
}

function draw() {
	translate(width/2,height/2);

	var x = random(-r,r);
	var y = random(-r,r);

	var d = dist(0,0,x,y);
	rec++;
	if(d<r){
		cir++;
		stroke(0,255,0);
	}
	else {
	stroke(200,0,0);
	}
	var pi = 4*cir/rec;
	print(pi);

	point(x,y);
}
