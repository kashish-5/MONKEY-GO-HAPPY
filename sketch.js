var backImage,backgr;
var player, player_running;
var ground,ground_img;
var banana,bananaImg,bananagroup;
var obstacle,obstacleImg,obstaclegroup;
var score;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImg=loadImage("banana.png");
  obstacleImg=loadImage("stone.png");
}
function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.2;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;

  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  score=0;

}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

  }

  /*if(bananaGroup.isTouching(player)){
    bananaGroup.destroyEach();
    score++;
   }*/
   
 spawnFood();
 spawnObstacles();
 

  drawSprites();
}

function spawnFood(){
  
  if(World.frameCount%80===0){
    banana=createSprite(600,Math.round(random(120,200)),10,10);
    banana.addImage(bananaImg);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=570;
    banana.depth = player.depth;
    player.depth = player.depth + 1;
  
    bananaGroup.add(banana);
    }
  
}


function spawnObstacles(){
  if(World.frameCount%300===0){
   obstacle=createSprite(600,275,10,10);
    obstacle.addImage(obstacleImg);
    obstacle.scale=0.2;
    obstacle.velocityX=-3;
    obstacle.lifetime=570;
    player.depth=obstacle.depth;
    obstacle.depth=obstacle.depth+1;
    obstacleGroup.add(obstacle);

  }
 }
