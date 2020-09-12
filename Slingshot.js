class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 15
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image1 = loadImage('sprites/sling1.png');
        this.image2 = loadImage('sprites/sling2.png');
        this.image3 = loadImage('sprites/sling3.png');
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(beginning){
        push();
        imageMode(CENTER);
        if(beginning == true){
        image(this.image1,270,120);
        }
        pop();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x>pointB.x){
                push();
                stroke(color(48,22,8));
                strokeWeight(4);
                if(beginning == true){
                    line(pointA.x+20, pointA.y, pointB.x+15, pointB.y);
                }
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);

                image(this.image3,pointA.x+25,pointA.y-5,10,20);
                pop();
            }
            else{
            push();
            stroke(color(48,22,8))
            strokeWeight(4);
            if(beginning == true){
                line(pointA.x-20, pointA.y, pointB.x+15, pointB.y);
            }
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);

            image(this.image3,pointA.x-25,pointA.y-5,10,20);
            pop();
            }
        }
        push();
        imageMode(CENTER);
        image(this.image2,245,75);
        pop();
    }
}