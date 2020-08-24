
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  log1, box1, box2, box3, chain1, chain2, chain3;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

    log1=new Log(200,200,90,5)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan")
  
  log1.display()

  drawSprites();
 
}



