class Drop{
    constructor(x, y){
        var options = { 
            'restitution':0.01,
            'friction':0.0001
          }
          this.rain = Bodies.circle(x, y, 10, options);
          this.radius = 8;
         // this.image = loadImage("paper.png");
          World.add(world, this.rain);
    

    }
   
    updateY(){
      if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0, 2000), y:random(0, 2000)});
      }
    }
  
    showDrop(){
      fill("blue");
      ellipseMode(CENTER);
      ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius)
    }
  
  
  }