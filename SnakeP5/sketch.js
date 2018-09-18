var unit =15;
var ular;
var pakan;
function setup() {
  createCanvas(600,600);
  frameRate(14);
  this.ular = new Snake(this.unit);
  var x = floor(random(0,width/unit))*unit;
  var y = floor(random(0,height/unit))*unit;
  this.pakan = new Food(x,y,unit);
}

function draw() {
  
  background(0);
  ular.show(255,255,255);
  pakan.show();


    if(ular.body[0][0] == pakan.xPos && ular.body[0][1] == pakan.yPos){
      pakan.eaten(width,height);
      ular.eat();
    }

  ular.move();

  // this ifs ensure the snake will reappear on the other side
  // when the snake moved offgrid
    if(ular.body[0][0] >= width) ular.body[0][0] = 0;
    if(ular.body[0][0] < 0) ular.body[0][0] = width-unit;
    if(ular.body[0][1] >= height) ular.body[0][1] = 0;
    if(ular.body[0][1] < 0) ular.body[0][1] = height-unit;

  // GAME OVER
  // the snake will turns red and stop moving
  if(ular.hitTails()){
    ular.show(255,0,0);
    noLoop();
  }
}
/* the snake cannot move to opposite of its current moving direction */
function keyPressed(){
  if (keyCode === UP_ARROW){
    this.ular.changeDir(0,-1);
    //console.log("UP");
  }
  if (keyCode === LEFT_ARROW){
    this.ular.changeDir(-1,0);
    //console.log("LEFT");
  }
  if (keyCode === DOWN_ARROW){
    this.ular.changeDir(0,1);
    //console.log("DOWN");
  }
  if (keyCode === RIGHT_ARROW){
    this.ular.changeDir(1,0);
    //console.log("RIGHT");
  }
}
