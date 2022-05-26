const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var fundo;

var tower,towerimg;
var cannon, cannonBall;
var angle;
var balls = []
var barcos = []


function preload() {
  fundo = loadImage("assets/background.gif");
  towerimg = loadImage("assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20



  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1,options);
  World.add(world, ground);

  tower = Bodies.rectangle(160,350,160,310,options);
  World.add(world,tower);
 
cannon = new Cannon(180,110,140,110,angle)


}

function draw() {
  background(189);

  rect(ground.position.x,ground.position.y,width*2,1);
  
  image(fundo,0,0,1200,600);

  push();
  imageMode(CENTER);
  image(towerimg,tower.position.x,tower.position.y,160,310);
  pop();

  

  cannon.show()  

  Engine.update(engine);
 
for(var i = 0; i<balls.length;i++){
  showCannonBalls(balls[i])
}
showBarcos()

}

function keyReleased(){
  if(keyCode===32){
    balls[balls.length-1].bomba()
  }
}

function showCannonBalls(ball,i){
if(ball){
  ball.show()
}
}

function keyPressed(){
  if(keyCode===32){
  var cannonBall = new CannonBall(cannon.x,cannon.y)
  balls.push(cannonBall)
  }
}

function showBarcos(){
  if(barcos.length>0){
    if(barcos.length<4 && barcos[barcos.length-1].body.position.x<width-300){
      var positions = [-40,-60,-70,-80]
      var position = random(positions)
      var barco = new Boat(width,height-60,170,170,position)
      barcos.push(barco)
    }  
    for(var i=0;i<barcos.length;i++){
      Matter.Body.setVelocity(barcos[i].body,{x:-0.9,y:0})
      barcos[i].show()
    }
  }
  else{
    var barco = new Boat(width,height-60,170,170,-60)
    barcos.push(barco)
  }
  
}