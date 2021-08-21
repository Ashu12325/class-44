var space,spacebackground
var me,meImg
var enemy,enemyImg
function preload(){
spacebackground= loadImage("images/space background.jpg")
meImg = loadImage("images/space-shuttle.png")
enemyImg = loadImage("images/enemy.png")
}


function setup() {
  createCanvas(1200,displayHeight);
space = createSprite(1200/2,displayHeight/2)
space.addImage(spacebackground)
space.scale = 1
space.velocityY = 2
me = createSprite(600,890,0,0)
me.addImage(meImg)
me.scale= 0.5




}
function draw() {
  background("white");  
  me.x = mouseX
  spawnEnemy()
  if(space.y === 800){
    space.y = space.width/2
  }
  drawSprites();
  fill("green")
  textSize(20)
  text(mouseX+","+mouseY,mouseX,mouseY)
 
}
function spawnEnemy() {
  if(frameCount % 60===0){
  enemy = createSprite(random(50,1000),0,0,0)
  enemy.addImage(enemyImg)
  enemy.scale = 0.2
 enemy.velocityY=3
  }
 
}