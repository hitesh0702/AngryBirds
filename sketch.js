const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,body,box1,box2,ground,pig2,log6;
function setup() {
  createCanvas(1200,400);
  engine= Engine.create();
  world= engine.world;
  ground=new Ground(600,height,1200,20);
 

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  box3=new Box(700,240,70,70);
  box4= new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);


  pig1 = new Pig(810,350);
  pig2 = new Pig(810,220);
  log1 =new Log(810,260,300,PI/2);
log2 =new Log(810,160,300,PI/2)
log3=new Log(760,120,150,PI/6);
log4=new Log(870,120,150,-PI/6);
bird1=new Bird(100,350);
}

function draw() {
  Engine.update(engine);
  background(0); 
 

  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird1.display();
}