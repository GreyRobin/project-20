var bg, bgimg
var sleep
var brush
var gym
var eat
var drink
var bath
var move
var astronaut

function preload() {
bgimg = loadImage("iss.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
gym = loadAnimation("gym1.png","gym2.png")
eat = loadAnimation("eat1.png","eat2.png")
drink = loadAnimation("drink1.png","drink2.png")
bath = loadAnimation("bath1.png","bath2.png")
move = loadAnimation("move.png","move1.png")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  bg = createSprite(800,400)
  bg.addImage(bgimg)
  astronaut = createSprite(300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale = 0.1

}

function draw() {
  background(255,255,255);  
  textSize(10)
  text("up arrow = brushing",50,50)
  textSize(10)
  text("down arrow = gymming",50,100)
  textSize(10)
  text("left arrow = eating",50,150)
  textSize(10)
  text("right arrow = bathing",50,200)
  textSize(10)
  text("m key = moving",50,250)
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 250
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 300
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y = 200
    astronaut.x = 500
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 150
    astronaut.x = 150
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if(keyDown("M")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.y = 150
    astronaut.x = 150
    astronaut.velocityX = 2
    astronaut.velocityY = 2
  }
  drawSprites();
}