class Pig{

    constructor(x, y)
    {
        var Pig_option ={
            restitution:0.8,
            friction: 0.3,
            density: 1.0,
            //mass: 1.360755439999997
          }
          this.body = Bodies.rectangle(x,y,50,50, Pig_option);
          this.width = 50;
          this.height = 50;
          World.add(world, this.body);
          

    }

    display()

    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
       translate(pos.x, pos.y);
       rotate(angle);     
         rectMode(CENTER);
         strokeWeight(4);
         stroke("red");
        fill("red");
        rect(0,0,this.width,this.height); 
        pop();
    }

}