class Man2{
    constructor(x, y){
        var options = { 
        'isStatic': true
        }
        this.Man2 = Bodies.circle(x, y, 110, options);
        this.radius = 40;
        this.image = loadImage( "images/myImage1.png");
        World.add(world, this.Man2);
    }
 
      display(){
        var pos = this.Man2.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70,200,500);
      }



}