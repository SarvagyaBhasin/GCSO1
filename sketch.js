var zenia,tourus,cyclap;
var zeniaweight = 2260;
var tourusweight = 1522;
var cyclapweight = 3000;
var zeniaspeed = 60;
var tourusspeed = 50;
var cyclapspeed = 45;
var zdeformation = 0.5*zeniaweight*zeniaspeed*zeniaspeed/22500;
var tdeformation = 0.5*tourusweight*tourusspeed*tourusspeed/22500;
var cdeformation = 0.5*cyclapweight*cyclapspeed*cyclapspeed/22500;
var wall;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(800, 200, 60, 400);
  wall.shapeColor = "white";

  zenia = createSprite(10, 200, 10, 10);
  zenia.velocityX = zenia.velocityX + 5;
  
  tourus = createSprite(10, 150, 10, 10);
  tourus.velocityX = tourus.velocityX + 4;

  cyclap = createSprite(10,250,10,10);
  cyclap.velocityX = cyclap.velocityX + 3.5;
}

function draw() {
  background("black");  
if(zenia.collide(wall)){
zenia.velocityx = 0;
if(zdeformation = 180 ){
zenia.shapeColor = "red";
}
}

if(tourus.collide(wall)){
  tourus.velocityx = 0;
  if(tdeformation<100 ){
  tourus.shapeColor = "green";
  }
  }

  if(cyclap.collide(wall)){
    cyclap.velocityx = 0;
    if(cdeformation>100  ){
    cyclap.shapeColor = "yellow";
    }
    }

  drawSprites();
}











