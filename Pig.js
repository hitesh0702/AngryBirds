class Pig{
    constructor(x,y){
        var op={

            restitution:0.7
        }
        this.pig= Bodies.rectangle(x,y,50,50,op);
        this.width=50;
        this.height=50;
        World.add(world,this.pig);
    }

        display(){

            var pos=this.pig.position;
            var angle= this.pig.angle;
            push();
            rectMode(CENTER);
            fill("green");
            translate(pos.x,pos.y)
            rotate(angle);
            rect(0,0,this.width,this.height);
            pop();


        }

    }

