class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1= loadImage('sprites/sling1.png');
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body;
    }

    display(){
        image(this.sling1,180,40);
        image(this.sling2,150,40);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#181A1B");
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x-25,pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+15,pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
    }
    
}