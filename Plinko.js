class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.x =x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,this.r/2,options);
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill(255, 0, 255);
        ellipse(pos.x, pos.y, this.r/2);
        pop();


      }
  };
