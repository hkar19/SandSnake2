// this snake wont move the opposite of its direction.
// this snake will compare previous direction and proposed direction
// if opposed, do previous direction.
//
// when snake eats, it will adds one tail
// the head moves and all old tails will follow.
// new tail will be added to the end


function Snake(unit){
  this.size = unit;
  this.speed = unit;

  this.prvX = 0; // previous speed on x
  this.prvY = 0; // previous speed on y

  this.xPos = 3*unit;
  this.yPos = 3*unit;

  this.show = function(){
    fill(255);
    rect(this.xPos,this.yPos,this.size,this.size);
  }
  //this.eat = function(){

//  }

  this.move = function(x,y){
    if(this.prvX ==-1*x) this.xPos += this.prvX*this.speed;
    else{
      this.xPos += x*this.speed;
      this.prvX = x;
    }


    if(this.prvY == -1*y) this.yPos += this.prvY*this.speed;
    else{
      this.yPos += y*this.speed;
      this.prvY = y;
    }

  }


}
