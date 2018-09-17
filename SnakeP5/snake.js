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
  this.prvY = -1; // previous speed on y

  this.xPos = 3*unit;
  this.yPos = 3*unit;

  this.body = [[this.xPos,this.yPos]];

  this.show = function(){
    fill(255);
    for(var i=0;i<=this.body.length-1;i++){
      rect(this.body[i][0],this.body[i][1], this.size, this.size);
    }
    //rect(this.xPos,this.yPos,this.size,this.size);
  }

  this.eat = function(){
    var x = this.body[this.body.length-1][0];
    var y = this.body[this.body.length-1][1];
    this.body.push([x,y]);
 }

  this.changeDir = function(x,y){ // this move is when the snake has a new direction
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

/*
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
*/
  }

  this.move =function(){ // this move is when the snake just move forward
    //console.log("move() FUNCTION CALLED");


    // for(var i=0;i<=this.body.length-1;i++){
    //   this.body[i][0] += this.prvX*this.speed;
    //   this.body[i][1] += this.prvY*this.speed;
    // }

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



}
