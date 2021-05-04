const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
image_1=loadImage("polygon.png");
}
function setup() {
    createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;
  ground1=new Ground(1200,580,200,10);
  ground2=new Ground(800,780,350,10);

  box1=new Box(1230,540);
  box2=new Box(1260,540);
  box3=new Box(1200,540);
  box4=new Box(1170,540);
  box5=new Box(1140,540);
  box6=new Box(1170,500);
  box7=new Box(1200,500);
  box8=new Box(1230,500);
  box9=new Box(1200,460);
  box10=new Box(720,740);
  box11=new Box(750,740);
  box12=new Box(780,740);
  box13=new Box(810,740);
  box14=new Box(840,740);
  box15=new Box(870,740);
  box16=new Box(900,740);
  box17=new Box(750,700);
  box18=new Box(780,700);
  box19=new Box(810,700);
  box20=new Box(840,700);
  box21=new Box(870,700);
  box22=new Box(780,660);
  box23=new Box(810,660);
  box24=new Box(840,660);
  box25=new Box(810,620);

  poly=new Polygon(100,200);(poly.body,{x:100,y:200})


slingshot=new Slingshot;
}
function draw(){
  Engine.update(engine)
  background(0)
ground1.display()
ground2.display()

slingshot.display()

 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()
 box15.display()
 box16.display()
 box17.display()
 box18.display()
 box19.display()
 box20.display()
 box21.display()
 box22.display()
 box23.display()
 box24.display()
 box25.display()
poly.display()
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed(){
   if(keyCode===32){
  slingshot.attach(this.polygon)
   } 
  }