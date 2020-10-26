var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;
var FoodGroup, obstacleGroup, bananaGroup;
var ground; 
var rand;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
monkey = createSprite(80, 315, 20, 20); 
monkey.addAnimation("running", monkey_running); 
monkey.scale = 0.1;
monkey.velocityY = 0; 
  
ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;

  bananaGroup = createGroup(); 
}


function draw() {
   background("white");
  
  spawnFood();
  spawnObstacle();

  monkey.collide(ground);
  
  if (keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -12;
  }
  
  //adding gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  
  if (ground.x < 0) {
    ground.x = ground.width/2;
  }
  
  console.log(ground.x);
  
  //survival time
  var survivalTime = 0; 
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime, 100, 50);
  
  
  drawSprites(); 
}

function spawnFood() {
   var rand = Math.round(random(120, 200));
  
  if (frameCount % 80 === 0) {
     var banana = createSprite(300, rand, 20, 20); 
     banana.addImage(bananaImage);
    banana.scale = 0.1; 
    banana.velocityX = -6;
    banana.lifetime = 300;
     bananaGroup.add(banana);
 }
}

function spawnObstacle() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(300, 325, 10, 40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1; 
    obstacle.velocityX = -6;
    obstacle.lifetime = 300; 
  }
}






