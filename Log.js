class Log{
    constructor(x,y,height,angle){
        var op={

            restitution:0.7,
            friction:1.0

        }
        this.log= Bodies.rectangle(x,y,20,height,op);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.log,angle);
        World.add(world,this.log);

    }

        display(){

            var pos=this.log.position;
            var angle= this.log.angle;
            push();
            fill("yellow");
            stroke('brown')
            strokeWeight(4);
            rectMode(CENTER);
            translate(pos.x,pos.y)
            rotate(angle);
            rect(0,0,this.width,this.height);
pop();


        }

    }

