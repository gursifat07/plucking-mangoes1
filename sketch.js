
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImg, tree, treeImg;

function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png");
	treeImg=loadImage("Plucking mangoes/tree.png")

}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;
	
	boy = createSprite(200,400,20,20)
	boy.addImage(boyImg)
	boy.scale=0.15
	tree = createSprite(800,250,20,20)
	tree.addImage(treeImg)
	tree.scale=0.40

	ground = new Ground(500,500,2000,20);
	mango1 = new Mango(675,175,50,50);
	mango2 = new Mango(755,155,40,40);
	mango3 = new Mango(870,50,50,50);
	mango4 = new Mango(950,125,40,40);
	mango5 = new Mango(900,170,50,50);
	mango6 = new Mango(750,75,40,40);
	ground = new Ground(500,500,1200,20);
	stone = new Stone(50,150,50,50);
	chain = new Chain(stone.body, {x:120 , y:315});
	

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230, 230, 230);
  drawSprites();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  chain.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
 
}
function keyPressed(){
    if(keyCode=== 32){
      
      Matter.Body.setPosition(stone.body,{x:300,y:250});
      chain.attach(stone.body);
	}
}



function detectCollision(lstone,lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
		console.log("hi")
	}
}
function mouseDragged (){
	Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});  
  }
  function mouseReleased() {
	  chain.fly();
	}