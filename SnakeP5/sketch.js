var unit =15;
var ular;
var pakan;
function setup() {
  // put setup code here
  createCanvas(600,600);
  frameRate(14);
  this.ular = new Snake(this.unit);
  var x = floor(random(0,width/unit))*unit;
  var y = floor(random(0,height/unit))*unit;
  this.pakan = new Food(x,y,unit);
}

function draw() {
  // put drawing code here
  background(0);



  ular.show();
  pakan.show();
  if(ular.xPos == pakan.xPos && ular.yPos == pakan.yPos) {
    pakan.eaten(width, height);
    //ular.eat();
  }
  ular.move();

  // this ifs ensure the snake will reappear on the other side
  // when the snake moved offgrid
  for(var i=0;i<ular.body.length;i++){
    if(ular.body[i][0] >= width) ular.body[i][0] = 0;
    if(ular.body[i][0] < 0) ular.body[i][0] = width-unit;
    if(ular.body[i][1] >= height) ular.body[i][1] = 0;
    if(ular.body[i][1] < 0) ular.body[i][1] = height-unit;
  }

  /*if(ular.xPos >= width) ular.xPos = 0;
  if(ular.xPos < 0) ular.xPos = width-unit;
  if(ular.yPos >= height) ular.yPos = 0;
  if(ular.yPos < 0) ular.yPos = height-unit;
  */
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
