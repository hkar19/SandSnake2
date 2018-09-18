// this snake wont move the opposite of its direction.
// this snake will compare previous direction and proposed direction
// if opposed, do previous direction.
//
// when snake eats, it will adds one tail
// the head moves and all old tails will follow.
// new tail will be added to the end

/*
Snake constructor
@param unit the size of snake
*/
function Snake(unit){
  this.size = unit; // size of snake
  this.speed = unit;

  this.prvX = 0; // previous speed of the head on x
  this.prvY = -1; // previous speed of the head on y

  this.xPos = 3*unit; // starting head position on X
  this.yPos = 3*unit; // starting head position on Y

  this.body = [[this.xPos,this.yPos]]; // array for snake's body

  // this function will taking color to draw snake
  // @param x,y,z Color in RGB
  this.show = function(x,y,z){
    fill(x,y,z);
    for(var i=0;i<=this.body.length-1;i++){
      rect(this.body[i][0],this.body[i][1], this.size, this.size);
    }
  }
  
  // this function will tell snake to eat and add tail to the end of body
  this.eat = function(){
    var x = this.body[this.body.length-1][0];
    var y = this.body[this.body.length-1][1];
    this.body.push([x,y]);
 }
  
  // this move is when the snake's head has a new direction
  // this method prevents snake to move backward
  // @param x direction to x axis
  // @param y direction to y axis
  this.changeDir = function(x,y){ 
    //console.log("move(x,y) FUNCTION CALLED");
    // this method only change HEAD direction.

    if(this.prvX ==-1*x){
      //console.log("NO MOVE");
        this.body[0][0] += this.prvX*this.speed;
    } // the snake just moves like it did before
    else{
      //console.log("SHOULD MOVE");
        this.body[0][0] += x*this.speed;
        this.prvX = x;
    }

    if(this.prvY ==-1*y){
      //console.log("NO MOVE");
        this.body[0][1] += this.prvY*this.speed;
    } // the snake just moves like it did before
    else{
      //console.log("SHOULD MOVE");
        this.body[0][1] += y*this.speed;
        this.prvY = y;
    }
  }
  
  // this move is when the snake just move forward
  this.move =function(){  
    //console.log("move() FUNCTION CALLED");

    // each bit of tail will pass its own x position and y position
    // starting from the end to the 2 bit of tail
    for(var i=this.body.length-1;i>0;i--){
      this.body[i][0] = this.body[i-1][0];
      this.body[i][1] = this.body[i-1][1];
    }
    // the head will gain new x and y position
      this.body[0][0] += this.prvX*this.speed;
      this.body[0][1] += this.prvY*this.speed;
  }
  
  // this is when the snake bit its tail
  this.hitTails = function(){
    var headX = this.body[0][0];
    var headY = this.body[0][1];

    for(var i=1;i<this.body.length;i++){
      if(headX == this.body[i][0] && headY == this.body[i][1]) return true;
      else return false;
    }
  }
}
