var bk1, bk2
var bg;
var estado = "inicio";
var pl, plimg;

function preload(){ // função que carregar todas as imagens e animações
  bk1 = loadImage("assets/bg1.webp")
  plimg = loadImage("assets/pl.png")
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(700,500);
  bk2= createSprite(350,250,700,500)
  bk2.addImage(bk1)
  bk2.scale = 3

  bg = createSprite(350,490,1400,50)
  bg.shapeColor = "NavajoWhite"


  // pl
  pl=createSprite(30,434,20,20)
  pl.addImage(plimg)
  pl.scale=0.4
  pl.visible=false

}

function draw(){
  background("#87CEFA");
  drawSprites(); 

  if (estado ==="inicio"){
    inicio()
  }else if (estado === "jogar"){
    jogar ()
  }else if (estado === "fim"){

  }
  text(mouseX + ", " + mouseY, mouseX, mouseY)
}

function inicio (){

  stroke("purple")
  strokeWeight(5)
  textFont("Koulen");
  fill ("LightPink")
  textSize(20)
  text("Bem vindo ao fundo do mar", 245,120)
  text("Pressione espaço para começar", 237,162)
  if(keyIsDown(32)){
    bk2.visible = false
    estado = "jogar"
  }
}


function jogar (){
  pl.visible=true
  if(keyIsDown(UP_ARROW)){
pl.y--
  }
  if(keyIsDown(DOWN_ARROW)){
    pl.y++
      }
      if(keyIsDown(LEFT_ARROW)){
        pl.x--
          }
          if(keyIsDown(RIGHT_ARROW)){
            pl.x++
              }
              algas()
  bg.velocityX = -2
  if(bg.x < 0){
    bg.x=width/2
  }

}
 
function algas(){
  if(frameCount%80===0){
var alga = createSprite(700,460,20,20)
alga.velocityX=-1
  }
}