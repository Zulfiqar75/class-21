var fixedRect, movingRect;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(200,600,40,70);
  rect1.shapeColor ="green";
  rect2 = createSprite(300,600,40,70);
  rect2.shapeColor ="green";
  rect3 = createSprite(400,600,40,70);
  rect3.shapeColor ="green";
  rect4 = createSprite(500,600,40,70);
  rect4.shapeColor ="green";
//string
  //createSprite(x,y,width,height);
}

function draw() { 
  //background(R,G,B)
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

//if(ball.isTouching(wall)){          }


if( isTouching(movingRect, rect4) ){
  movingRect.shapeColor = "red";
  rect4.shapeColor = "red";
}else{
  
  movingRect.shapeColor = "green";
  rect4.shapeColor = "green";
}
 
  drawSprites();
}

