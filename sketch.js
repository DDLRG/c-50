var paisaje, paisajeImg;
var plane, planeImg;
var alien, alienImg

function preload(){
  
  planeImg = loadImage("assets/plane.png")
  paisajeImg = loadImage("assets/paisaje.jpg")
  alienImg = loadImage("assets/alien.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //Añadir la imagen de fondo
paisaje = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
paisaje.addImage(paisajeImg)
paisaje.scale = 3.2
  

//Crear el sprite del jugador

plane = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
plane.addImage(planeImg)
plane.scale = 0.3
 
  //player.debug = true
   // player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
  // player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 




  //Mover al jugador arriba y abajo y hacer que el juego móvil sea compatible de forma táctil.
if(keyDown("UP_ARROW")||touches.length>0){
  plane.y = plane.y-30
}
if(keyDown("LEFT_ARROW")||touches.length>0){
  plane.x = plane.x-30
}
if(keyDown("RIGHT_ARROW")||touches.length>0){
  plane.x = plane.x+30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
  plane.y = plane.y+30
}


//Liberar las balas y cambiar la imagen del tirador a la posición de disparo cuando la barra espaciadora se presiona.
if(keyWentDown("space")){
 
  plane.addImage("assets/plane.png")
 
}

//El jugador regresa a la imagen de posición original una vez que dejamos de presionar la barra de espacio.
else if(keyDown("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
 // player.addImage(shooterImg)
 //player.addImage(shooter_1.png)

}

drawSprites();

}
