
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var paperObject,ground;


function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1=new Dustbin(1200,650,10,30);
	dustbin2=new Dustbin(1210,650,30,10);
	dustbin3=new Dustbin(1250,650,10,30);
	paperObject=  new Paper(200,450,40);
	ground= new Ground(width/2,670,width,20)


	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
  ground.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {

	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.position,{x:85 , y:85});
	}
}



