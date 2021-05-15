var gardenimg,garden;
var tom,tomimg1,tomimg2,tomimg3;
var jerry,jerryimg1,jerryimg2,jerryimg3;


function preload() {
    //load the images here
    gardenimg = loadImage("images/garden.png");
    tomimg1 = loadAnimation("images/cat1.png");
    tomimg2 = loadAnimation("images/cat2.png","images/cat3.png");
   tomimg3 = loadImage("images/cat4.png");
    jerryimg1 = loadAnimation("images/mouse1.png");
     jerryimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryimg3 = loadImage("images/mouse4.png");

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400,1000,800);
    garden.addImage(gardenimg);

    tom = createSprite(850,600);
    tom.addAnimation("tomSleeping",tomimg1);
    tom.scale = 0.2;

   jerry = createSprite(200,600);
   jerry.addAnimation("jerry",jerryimg1);
    jerry.scale = 0.2;


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < (tom.width - jerry.width)/2){
       
        //tom.addAnimation("tomsitting",tomimg3);
        tom.addAnimation("tomsitting",tomimg3);
        tom.changeAnimation("tomsitting",tomimg3);
        tom.velocityX = 0;

     //  jerry.addAnimation("jerrysitting",jerryimg3);
        jerry.addAnimation("jerrysitting",jerryimg3);
      jerry.changeAnimation("jerrysitting",jerryimg3);
        
        
        
       

       
       
       
        
    }

    keyPressed();
    
    drawSprites();
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        jerry.addAnimation("jerryTeasing",jerryimg2)
        jerry.changeAnimation("jerryTeasing");
        jerry.frameDelay = 15;
        
            tom.addAnimation("tomrunning",tomimg2)
            tom.changeAnimation("tomrunning");
           // tom.frameDelay = 10;
            tom.velocityX =-2;
            
        
        
        
    }
    
 }
    

