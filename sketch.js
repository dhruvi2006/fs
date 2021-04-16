var starImg,bgImg;
var star, starBody;
var star1,star2,star3,star4
var fairy1,fairy2,fairy3,fairy4
//create variable for fairy sprite and fairyImg
var fairy,fairyImg,fairySound

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine
var world
//var bodies 

function preload()
{
	starImg = loadImage("starimage.png");
	bgImg = loadImage("starryNight.jpg");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png")
    fairySound = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy

	star1 = createSprite(150,20);
	star1.addImage(starImg);
	star1.scale = 0.02;

	star2 = createSprite(300,50);
	star2.addImage(starImg);
	star2.scale = 0.01;

	star3 = createSprite(450,300);
	star3.addImage(starImg);
	star3.scale = 0.01;

	star4 = createSprite(750,200);
	star4.addImage(starImg);
	star4.scale = 0.02;

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.03;
    
	fairy1 = createSprite(140,40);
	fairy1.addAnimation("moving",fairyImg);
	fairy1.scale = 0.04
   
	fairy2 = createSprite(300,650);
	fairy2.addAnimation("moving",fairyImg);
	fairy2.scale = 0.06

	fairy3 = createSprite(50,150);
	fairy3.addAnimation("moving",fairyImg);
	fairy3.scale = 0.05

	fairy4 = createSprite(749,195);
	fairy4.addAnimation("moving",fairyImg);
	fairy4.scale = 0.07

	fairy = createSprite(150,490);
	fairy.addAnimation("moving",fairyImg);
	fairySound.play();
	fairy.scale = 0.2


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.9, isStatic:true});
	World.add(world, starBody);
	//fairyBody = Bodies.circle(150,500,20,{restitution:0.5, isStatic:true  });
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }
  Engine.update(engine);

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
  
	if (keyCode === RIGHT_ARROW) {
		//Matter.Body.setStatic(fairy,false); 
		fairy.x=fairy.x+30
	}
    
	if (keyCode === LEFT_ARROW) {
		//Matter.Body.setStatic(fairy,false); 
		fairy.x=fairy.x-40
	}

	
}
