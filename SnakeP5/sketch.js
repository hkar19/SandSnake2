var unit =15;
var ular;
function setup() {
  // put setup code here
  createCanvas(600,600);
  frameRate(15);
  this.ular = new Snake(this.unit);
}

function draw() {
  // put drawing code here
  background(0);
  ular.show();
  ular.move(ular.prvX,ular.prvY);
}
/* the snake cannot move to opposite of its current moving direction */
function keyPressed(){
  if (keyCode === UP_ARROW){
    this.ular.move(0,-1);
    //console.log("UP");
  }
  if (keyCode === LEFT_ARROW){
    this.ular.move(-1,0);
    //console.log("LEFT");
  }
  if (keyCode === DOWN_ARROW){
    this.ular.move(0,1);
    //console.log("DOWN");
  }
  if (keyCode === RIGHT_ARROW){
    this.ular.move(1,0);
    //console.log("RIGHT");
  }
}
