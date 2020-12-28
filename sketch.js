
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall, wall2,wall3,Ground,paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

	engine = Engine.create();
	world = engine.world;

	Ground = new ground(600,height-40,1200,20);
	paper1 = new paper(200,300,20);
	line1 = new dustbin(800,340,200,20);
	line2 = new dustbin(700,300,20,100);
	line3 = new dustbin(900,300,20,100);

	Engine.run(engine);

}

function draw() {
	background(0);
	Engine.update(engine);

  Ground.display();
  paper1.display();
  line1.display();
  line2.display();
  line3.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
		Matter.Body.applyForce(paper1.body, paper1.body.position, {
			
			x:55,
			y:-70
		
		});
	      
   }
   }