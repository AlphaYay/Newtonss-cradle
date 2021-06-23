
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var world, engine;

function setup() {
	createCanvas(1600, 1600);


	engine = Engine.create();
	world = engine.world;
var bobstartx= width/2;
var bobstarty=height/4+500;
    bobD=40
	bob1 = new Bob(bobstartx-bobD*2,bobstarty,bobD);
	bob2 = new Bob(bobstartx-bobD,bobstarty,bobD);
	bob3 = new Bob(bobstartx,bobstarty,bobD);
	bob4 = new Bob(bobstartx+bobD,bobstarty,bobD);
	bob5 = new Bob(bobstartx+bobD*2,bobstarty,bobD);
    roof= new  Roof(width/2,height/4,width/7,20);
	rope1=new Rope(bob1.body,roof.body,-bobD*2,0);
	rope2=new Rope(bob2.body,roof.body,-bobD,0);
	rope3=new Rope(bob3.body,roof.body,0,0);
	rope4=new Rope(bob4.body,roof.body,bobD,0);
	rope5=new Rope(bob5.body,roof.body,bobD*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
}

