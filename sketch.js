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

 
  bg.velocityX = -2
  if(bg.x < 0){
    bg.x=width/2
  }

}
 
