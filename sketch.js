let myCars=[];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 100; i++){
    myCars[i] = new Car (color(random(255,0),random(0,255),random(0,255)),random(0,width),random(0,height),1, random(360));
    
  }
}

function draw() {
  background(0);
  for (let j= 0; j<100; j ++){
    myCars[j].drive();
    myCars[j].display();
    myCars[j].flip();
  }
}