class Man{
    constructor(x, y){
        var options = { 
        'isStatic': true
        }
        this.Man = Bodies.circle(x, y, 110, options);
        this.radius = 40;
        this.image = loadImage( "images/w2.png");
        World.add(world, this.Man);
    }
 
      display(){
        var pos = this.Man.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+70,400,500);
      }



}