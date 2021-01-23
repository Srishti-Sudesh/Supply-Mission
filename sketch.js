var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var PLAY = 1; END = 0;
//var gameState = PLAY;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;

 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color("cyan");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color("cyan");

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true, friction:0.5} );
 	World.add(world, boxBottomBody);

 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color("cyan");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  //console.log(gameState);
  console.log(packageBody.position.x);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

//if (gameState===PLAY){
  packageSprite.x = helicopterSprite.x

  packageSprite.collide(boxleftSprite);
  packageSprite.collide(boxrightSprite);
  packageSprite.collide(boxBase);


  if (keyDown(LEFT_ARROW)){
	helicopterSprite.velocityX = -5;
	}
	if (keyDown(RIGHT_ARROW)){
  helicopterSprite.velocityX = 5;
	}	

	if (keyWentUp(LEFT_ARROW)||keyWentUp(RIGHT_ARROW)){
		helicopterSprite.velocityX = 0;
	}
	if (keyDown(DOWN_ARROW)){
			Matter.Body.setStatic(packageBody, false);
	}		





  
  drawSprites();
  
  
 
}
