//this is the food for the Snake
//this food will appear on a random place
//later when eaten, this food will dissapear and reappear on different place

function Food(x,y,unit){
  this.xPos =x;
  this.yPos =y;
  this.size =unit;

  this.show = function(){
    fill(255,0,0);
    rect(this.xPos, this.yPos, this.size, this.size);
  }

  this.eaten = function( w, h){
    this.xPos = floor(random(0,w/this.size))*this.size;
    this.yPos = floor(random(0,h/this.size))*this.size;
  }
}
