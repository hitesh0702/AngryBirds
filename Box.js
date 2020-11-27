class Box{
    constructor(x,y,width,height){
        var op={

            restitution:0.7
        }
        this.box= Bodies.rectangle(x,y,width,height,op);
        this.width=width;
        this.height=height;
        World.add(world,this.box);
    }

        display(){

            var pos=this.box.position;
            var angle= this.box.angle;
            push();
            stroke('orange')
            fill("white")
            strokeWeight(4);
            rectMode(CENTER);
            translate(pos.x,pos.y)
            rotate(angle);
            rect(0,0,this.width,this.height);
pop();


        }

    }






