var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,750);

    tom = createSprite(900, 600);
    tom.addAnimation("tomSitting", tomImg1);
    tom.scale = 0.2;
    tom.setCollider("circle",0,0,300);
    //tom.debug = true;

    jerry = createSprite(200, 640);
    jerry.addAnimation("jerryWithCheese", jerryImg1);
    jerry.scale = 0.1;
    jerry.setCollider("circle",0,0,200);
    //jerry.debug = true;
}

function draw() {

    background(bg);

    if((tom.x - jerry.x) < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomEnd", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomEnd");
        jerry.addAnimation("jerryEnd", jerryImg3);
        jerry.scale=0.1;
        jerry.changeAnimation("jerryEnd");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomWalking", tomImg2);
        tom.changeAnimation("tomWalking");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 35;
        jerry.changeAnimation("jerryTeasing");
    }
}
