var bk1, bk2;
var bg;
var estado = "inicio";
var pl, plimg;
var alg1, alg2, alg3, alg4, cr1, cr2,cr3;
var pred1, pred2, pred3, pred4, pred5, pred6;
var pontuacao=0;
var vida=5;
var gpalgas, gppred, bolhas;
var pl1, pl2, pl3;

function preload(){ // função que carregar todas as imagens e animações
  bk1 = loadImage("assets/bg1.webp");
  plimg = loadImage("assets/pl.png");
  //algas e corais
  alg1 =loadImage ("assets/alg1.png");
  alg2 =loadImage ("assets/alg2.png");
  alg3 =loadImage ("assets/alg3.png");
  alg4 =loadImage ("assets/alg4.png");
  cr1 = loadImage ("assets/crl1.png");
  cr2 = loadImage ("assets/crl2.png");
  cr3 = loadImage ("assets/crl3.png");
  //predadores
  pred1 =loadImage ("assets/pred1.png");
  pred2 =loadImage ("assets/pred2.png");
  pred3 =loadImage ("assets/pred3.png");
  pred4 =loadImage ("assets/pred4.png");
  pred5 =loadImage ("assets/pred5.png");
  pred6 =loadImage ("assets/pred6.png");

  bolhas = loadImage("assets/bl.png")
  //planctons
  pl1 = loadImage("assets/pl1.png")
  pl2 = loadImage("assets/pl2.png")
  pl3 = loadImage("assets/pl3.png")

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

  gpalgas = new Group();
  gppred = new Group ()

}

function draw(){
  background("#87CEFA");
  drawSprites(); 

  if (estado ==="inicio"){
    inicio()
  }else if (estado === "jogar"){
    jogar ()
  }else if (estado === "fim"){
    gameOver()
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
  pl.visible=true;
  controles();
  algas();
  predadores ();
  bolha();
  // pontuação:
  stroke("purple")
  strokeWeight(5)
  textFont("Koulen");
  fill ("LightPink")
  textSize(20)
  text ("pontuação:"+pontuacao,520,15)
  text ("vida:"+vida,520,35)
  for(var i=0;i<vida;i++){
    image(plimg,(580+(i*22)),26,20,20)
  }
  
  //colisão
 if (pl.isTouching(gpalgas)||pl.isTouching(gppred)){
if (vida>0){
vida=vida-1
pl.x=55
pl.y=267
}
else{
estado="fim"
}
 }
  
}
function gameOver(){
gpalgas.destroyEach()
gppred.destroyEach()
stroke("purple")
  strokeWeight(5)
  textFont("Koulen");
  fill ("LightPink")
  textSize(60)
  text("Game Over", 245,120)
}
function algas(){
  if(frameCount%55===0){
    var alga = createSprite(708,460,20,20)
    alga.velocityX=-2
    alga.lifetime = 750
    alga.scale = 1
    var r = Math.round(random(1,7))
    switch (r) {
      case 1: alga.addImage(alg3)
        break;
        case 2: alga.addImage(alg3)
        break;
        case 3: alga.addImage(alg3)
        break;
        case 4: alga.addImage(alg4)
        break;
        case 5: alga.addImage(cr2)
                alga.scale = 0.7
        break;
        case 6: alga.addImage(cr2)
                alga.scale = 0.7
        break;
        case 7: alga.addImage(cr3)
                alga.scale = 0.5
        break;
    }

    gpalgas.add (alga)
    alga.debug = true
    alga.setCollider("circle", 0,0,40)
  }
}

function predadores (){
  if (frameCount%100 === 0){
    var pred = createSprite (708,random(10,395),20,20)
    pred.velocityX = -1
    pred.lifetime = 800
    var r= Math.round(random(1,6))
    switch(r){
      case 1:pred.addImage(pred1)
             pred.setCollider("circle", 0,0,40)
      break
      case 2:pred.addImage(pred2)
             pred.setCollider("circle", 0,0,65)
      break
      case 3:pred.addImage(pred3)
             pred.setCollider("circle", 0,0,40)
      break
      case 4:pred.addImage(pred4)
             pred.setCollider("circle", 0,0,40)
      break
      case 5:pred.addImage(pred5)
             pred.setCollider("circle", 0,0,50)
      break
      case 6:pred.addImage(pred6)
             pred.setCollider("circle", 0,0,50)
      break
    }

    gppred.add (pred)
    pred.debug=true
   
  }
}

function bolha(){
  if (frameCount%50 === 0){
    var bl = createSprite (random(10,650),random(10,450),20,20)
    bl.velocityY = -1
    bl.lifetime = 550
    bl.scale = 0.5
    bl.addImage(bolhas)

  }
}

function controles(){
  if(keyIsDown(UP_ARROW)){
    pl.y-=3
  }
  if(keyIsDown(DOWN_ARROW)){
    pl.y+=3
  }
  if(keyIsDown(LEFT_ARROW)){
    pl.x-=3
  }
  if(keyIsDown(RIGHT_ARROW)){
    pl.x+=3
  }
}