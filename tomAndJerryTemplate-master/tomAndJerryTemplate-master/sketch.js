var bgImg;
var cat;
var mouse;
function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    catimg1 = loadAnimation("cat1.png")
    mouseimg1 = loadAnimation("mouse1.png")
    catimg2 = loadAnimation("cat2.png","cat3.png")
    mouseimg2 = loadAnimation("mouse2.png","mouse3.png")
    catimg3 = loadAnimation("cat4.png")
    mouseimg3 = loadAnimation("mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("catsleepin",catimg1)
    cat.scale = 0.2
    mouse = createSprite(200,600)
    mouse.addAnimation("mousestanding",mouseimg1)
    mouse.scale = 0.15

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
      cat.addAnimation("catrunning",catimg2)
      cat.changeAnimation("catrunning")
      cat.velocityX = -5
  }

 
 
}










