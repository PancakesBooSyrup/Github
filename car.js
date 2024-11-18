class Car {

  
    constructor(tempC, tempXpos,  tempYpos, tempXspeed, tempAng){
     this.c= tempC;
     this.xpos = tempXpos;
     this.ypos = tempYpos;
     this.xspeed = tempXspeed;
     this.angle = tempAng;
    }
    
    display(){
      push();
      stroke(0);
      fill(this.c);
      translate(this.xpos,this.ypos);
      rotate(radians(this.angle));
      rect(0,0,20,10);
      pop();
    }
    
    drive(){
      this.xpos = this.xpos + this.xspeed;
      if (this.xpos>width){
        this.xpos = 0;
      }
    }
  
   flip(){
    this.angle ++;
  }
  
  }
  
   
  
  