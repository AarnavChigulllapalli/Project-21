var Bathing, Brushing, Eating, Gym, Moving, Astronaut, Sleep, bg

function preload(){
  Bathing=loadAnimation("images/bath1.png","images/bath2.png")
  Brushing=loadImage("images/brush.png")
  Eating=loadAnimation("images/eat1.png","images/eat2.png")
  Gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
  Moving=loadAnimation("images/move.png","images/move1.png")
  Sleep=loadImage("images/sleep.png")
  bg=loadImage("images/iss.png")
}

function setup() {
  createCanvas(400, 400);
  Astronaut.createSprite(300,230);
  Astronaut.addImage(Sleep)
  Astronaut.scale = 0.1
}

function draw() {
  background(220);
  text("Up arrow to brush",200,100)
  text("Down arrow to gymming",200,150)
  text("Right arrow to bathing",200,200)
  text("Left arrow to eating",200,250)
  text("M to moving",200,300)
  if(keyDown("UP_ARROW")){
    Astronaut.addImage(Brushing)
    Astronaut.changeImage("Brushing", Brushing)
    Astronaut.y=350
    Astronaut.velocityX=0
    Astronaut.velocityY=0
  } 
  if(keyDown("DOWN_ARROW")){
    Astronaut.addAnimation(Gym)
    Astronaut.changeAnimation("Gym", Gym)
    Astronaut.y=350
    Astronaut.velocityX=0
    Astronaut.velocityY=0
  } 
  if(keyDown("RIGHT_ARROW")){
    Astronaut.addAnimation(Bathing)
    Astronaut.changeAnimation("Bathing", Bathing)
    Astronaut.y=350
    Astronaut.velocityX=0
    Astronaut.velocityY=0
  } 
  if(keyDown("LEFT_ARROW")){
    Astronaut.addAnimation(Eating)
    Astronaut.changeAnimation("Eating", Eating)
    Astronaut.y=350
    Astronaut.velocityX=0
    Astronaut.velocityY=0
  } 
  if(keyDown("M")){
    Astronaut.addAnimation(Moving)
    Astronaut.changeAnimation("Moving", Moving)
    Astronaut.y=350
    Astronaut.velocityX=0.1
    Astronaut.velocityY=0.1
  } 
  drawSprites()
}