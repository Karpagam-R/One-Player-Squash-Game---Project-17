var ball, ballImg;

var paddle, paddleImg;


function preload() {
  ballImg = loadImage("ball.png");
  paddleImg=loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  
  ball=createSprite(40,200,20,20);
  ball.addImage(ballImg); 
  
  //To give the start velocity to the ball
  ball.velocityX=9; 
  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleImg);
}

function draw() {
  background(205,153,0);
  
  //To create Edeges
  edges=createEdgeSprites();
  
  //Makes the ball bounce of left, top and bottome edge
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  //explosion gives random velocity to the ball when it his     the paddle
  
  ball.bounceOff(paddle,explosion);
  
  paddle.collide(edges);
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  
  drawSprites();
  
}

//To give random vertical velocity to the ball
function explosion() {
  ball.velocityY=random(-5,8);
}

