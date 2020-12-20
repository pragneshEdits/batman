    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;
    var manMe;
     var man;
    var storm,thunder;
    var maxDrops = 300;
    var rand;
    var thunderCreatedFrame = 0;
    var drops = [];
    var thun1,thun2,thun3,thun4;
    var thun;
   
function preload(){
 // manMeIMG = loadAnimation("images/w1.png","images/w2.png","images/w3.png",
 // "images/w4.png","images/w5.png","images/w6.png","images/w7.png","images/w8.png");
 // manIMG = loadAnimation("images/myImage1.png","images/myImage2.png");
  
    thun1 = loadImage("images/1.png");
    thun2 = loadImage("images/2.png");
    thun3 = loadImage("images/3.png");
    thun4 = loadImage("images/4.png");
}

function setup() {
    engine  = Engine.create();
    world = engine.world;

    createCanvas(1200,700);
    
   manMe = new Man(300,420,50);
   // manMe.addAnimation("male",manMeIMG);
   // manMe.scale = 0.6;

    man = new Man2(800,430,10,10);
  //  man . addAnimation("son",manIMG);
   // man.scale = 0.7;

    if(frameCount % 200 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,2000), random(0,2000)));
        }
    }

}

function draw() {

    background("black");  
    
    Engine.update(engine);
    manMe.display();
    man.display();

    rand = Math.round(random(1,4));
      if(frameCount%80===0){
          thunderCreatedFrame=frameCount;
          thun = createSprite(random(10,1000), random(10,30), 10, 10);
          switch(rand){
              case 1: thun.addImage(thun1);
              break;
              case 2: thun.addImage(thun2);
              break; 
              case 3: thun.addImage(thun3);
              break;
              case 4: thun.addImage(thun4);
              break;
              default: break;
          }
          thun.scale = random(0.3,0.5)
      }
  
      if(thunderCreatedFrame + 10 ===frameCount && thun){
          thun.destroy();
      }

    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY();
        
    }
    drawSprites();
}