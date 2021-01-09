const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var GameState = "onSling"
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var log6;
var slingshot1;
var score = 0;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    log6 = new Log(230,180,80,PI/2);

    bird = new Bird(200,70);

    slingshot1 = new slingShot(bird.body,{x:290,y:70})
    

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    //console.log("spookyScary")
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    
    //log6.display();
    pig1.score()
    pig3.score()
    
    push()
       stroke("white")
       fill("white")
       text(" points: "+score,300,50)
    pop();
    
    
    platform.display();
    slingshot1.display();
    bird.display();
}

function mouseDragged()
{
    
    if(GameState === "onSling")
    {
      Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})
    }
}

function mouseReleased()
{
    slingshot1.fly();
    GameState = "launched"
}

function keyPressed()
{
    if(keyCode === 32)
    {
       bird.trajectory = []
       Matter.Body.setPosition(bird.body,{x:200,y:70})
       slingshot1.attach(bird.body)
       GameState = "onSling";
    }
}

async function  getBackgroundImage()
{
    var response = await fetch("http://worldclockapi.com/api/json/est/now")

    var responseJson = await response.json()
    var currdate = responseJson.currentDateTime;
    console.log(currdate)
    var hour  = currdate.slice(11,13)
    console.log(hour)

    if(hour>=6 && hour<= 19)
    {
      backgroundImg = loadImage("sprites/bg.png")
    }
     else
     {
        backgroundImg = loadImage("sprites/bg2.jpg")
     }

}


