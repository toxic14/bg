class paper{

    constructor(x,y,radius){
    
    var option={
    
    isStatic:false,
    restitution :0.3,
    friction : 0.5,
    density : 1.2

    }

    this.body=Bodies.circle(x,y,radius,option);
    this.body.radius=radius;
    World.add(world,this.body);

    }
    display(){

        ellipseMode(RADIUS)
        fill("red");
        ellipse(this.body.position.x, this.body.position.y,this.body.radius);

    }
    
    }