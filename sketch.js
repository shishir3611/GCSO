var car, wall;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  weight = Math.round(random(400,1500));
  speed = Math.round(random(55,90));
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColour = 'blue'
  //car.debug = true;
  wall = createSprite(1500, 200, 60, height/2);
  
}

function draw() {
  background(0); 
  deformation = (0.5 * weight * speed * speed) / 22509;
  if(car.isTouching(wall)){
    car.velocityX = 0;
    if(deformation>180){
      car.shapeColor = 'red';
    }else if(deformation>=100 && deformation<180){
      car.shapeColor = 'yellow';
    }else if (deformation<100){
      car.shapeColor = 'green';
    }
  } 
  
  
  drawSprites();
}