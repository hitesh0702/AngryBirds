class Bird{
    constructor(x,y){
        var op={

            restitution:0.7,
            density:1.0
        }
        this.bird= Bodies.rectangle(x,y,50,50,op);
        this.width=50;
        this.height=50;
        World.add(world,this.bird);
    }

        display(){

            var pos=this.bird.position;
            var angle= this.bird.angle;
            pos.x=mouseX;
            pos.y=mouseY;
            push();
            stroke('blue')
            strokeWeight(4);
            fill("red")
            rectMode(CENTER);
            translate(pos.x,pos.y)
            rotate(angle);
            rect(0,0,this.width,this.height);
pop();


        }

    }

