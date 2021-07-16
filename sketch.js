var bgImg;
var cat,mouse;
var catImg1,catImg2,catImg3,mouse1Img,mouse2Img,mouseImg3;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    catImg1=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png","images/cat3.png")
    catImg3=loadAnimation("images/cat4.png")
    mouse1Img=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3=loadAnimation("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
    cat=createSprite(870,600);
    cat.addAnimation("tom",catImg1)
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("jerry",mouse1Img)
    mouse.scale=0.15;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2)
{
    cat.velocityX=0;
    cat.addAnimation("tomhi",catImg3);
    cat.changeAnimation("tomhi");
    cat.x=300;

    mouse.velocityX=0;
    mouse.addAnimation("mousehi",mouseImg3);
    mouse.changeAnimation("mousehi");
    mouse.x=100;
    
}
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
    cat.velocityX=0;
    cat.addAnimation("tombye",catImg2);
    cat.changeAnimation("tombye");
    cat.x=300;

    mouse.addAnimation("mousebye",mouseImg2);
    mouse.changeAnimation("mousebye");
    
}


}
