var m, f;



function setup() {
  createCanvas(800,400);
  m = createSprite(400, 200, 80, 30);
  m.shapeColor = "blue";

  f = createSprite(200, 200, 50, 80);
  f.shapeColor = "blue";

}

function draw() {
  background("black");  

m.x = mouseX;
m.y = mouseY;

if(m.x-f.x < m.width/2 + f.width/2 && f.x-m.x < f.width/2 + m.width/2 &&
   m.y-f.y < m.height/2 + f.height/2 ){
  m.shapeColor = "red";
  f.shapeColor = "red";
}
else{
  m.shapeColor = "blue";
  f.shapeColor = "blue";
}
  drawSprites();
}