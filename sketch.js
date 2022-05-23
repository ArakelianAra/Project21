
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var Ground
//var leftSide
var left
var right
function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);
	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Matter.Bodies.circle(200,200,30,ball_options)
		World.add(world,ball)
	
	//leftside=Matter.Bodies.rectangle(200,200,30,30)

	Matter.Bodies.rectangle(100,100,50,50)
	Engine.run(engine);
 //groundObj=new ground(width/2,670,width,20);
 //leftSide=new ground(1100,600,20,120)
  left=new ground(550,550,20,100)
  right=new ground(700,550,20,100)
  Ground=new ground(500,600,1000,10)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Ground.display()
right.display()
  left.display()
  //leftSide.display()
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:100,y:-200})
	}
	
}


