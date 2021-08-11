var Bathing, Brushing, Eating, Gym, Moving, Astronaut, Sleep, bg

function Preload(){
  Bathing.loadAnimation("bath1.png","bath2.png")
  Brushing.loadAnimation("brush.png")
  Eating.loadAnimation("eat1.png","eat2.png")
  Gym.loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  Moving.loadAnimation("move.png","move1.png")
  Sleep.loadAnimation("sleep.png")
  bg.loadImage("iss.png")
}

function setup() {
  createCanvas(400, 400);
  Astronaut.createSprite(300,230);
  Astronaut.addAnimation(Sleep)
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
    Astronaut.addAnimation(Brushing)
    Astronaut.changeAnimation("Brushing", Brushing)
    Astronaut.y=350
    Astronaut.valocityX=0
    Astronaut.valocityY=0
  } 
  if(keyDown("DOWN_ARROW")){
    Astronaut.addAnimation(Gym)
    Astronaut.changeAnimation("Gym", Gym)
    Astronaut.y=350
    Astronaut.valocityX=0
    Astronaut.valocityY=0
  } 
  if(keyDown("RIGHT_ARROW")){
    Astronaut.addAnimation(Bathing)
    Astronaut.changeAnimation("Bathing", Bathing)
    Astronaut.y=350
    Astronaut.valocityX=0
    Astronaut.valocityY=0
  } 
  if(keyDown("LEFT_ARROW")){
    Astronaut.addAnimation(Eating)
    Astronaut.changeAnimation("Eating", Eating)
    Astronaut.y=350
    Astronaut.valocityX=0
    Astronaut.valocityY=0
  } 
  if(keyDown("M")){
    Astronaut.addAnimation(Moving)
    Astronaut.changeAnimation("Moving", Moving)
    Astronaut.y=350
    Astronaut.valocityX=0.1
    Astronaut.valocityY=0.1
  } 
}