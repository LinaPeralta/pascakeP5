//toggles

//flavor
let cToggle;
let vToggle;
let zToggle;

//glace
let gcToggle;
let gbToggle;
let gfToggle;
let gnonToggle;

//toppings
let tcToggle;
let tfToggle;
let tnonToggle;

let menu;
let c;



window.setup = function setup() {

  createCanvas(1435, 700);

  //toggles

  //flavor
  cToggle = false;
  vToggle = false;
  zToggle = false;

  //glace
  gcToggle = false;
  gbToggle = false;
  gfToggle = false;
  gnonToggle = false;

  //toppings
  tcToggle = false;
  tfToggle = false;
  tnonToggle = false;

 menu = loadImage("../img/menu.png");
 c = loadImage("../img/c.png");
}

window.draw = function draw() {
  background(242, 237, 240);

  image(menu, 960, 30)
  menu.resize(404,640);

  image(c, 160, 150);

/*
  noStroke();
  fill(255, 255, 255);
  rect(960, 30, 404, 640, 20);

  fill(255, 0, 0);
  rect(980, 60, 30, 30, 5);
*/


  //conditionals for paint images 

  //////////only cakes
  if (cToggle) {
   // image(c, 160, 150);
  }

  if (vToggle) {
    // image(v, 608, 330);
  }

  if (zToggle) {
    // image(z, 608, 330);
  }

  ///////////cakes and glace

  //chocolate glace
  //dark
  if (cToggle && gcToggle) {
    // image(cc, 608, 330);
  }
  if (vToggle && gcToggle) {
    // image(, 608, 330);
  }
  if (zToggle && gcToggle) {
    // image(z, 608, 330);
  }

  //white
  if (cToggle && gbToggle) {
    // image(cc, 608, 330);
  }
  if (vToggle && gbToggle) {
    // image(, 608, 330);
  }
  if (zToggle && gbToggle) {
    // image(z, 608, 330);
  }

  //fruit glace
  if (cToggle && gnonToggle) {
    // image(c, 608, 330);
  }

  if (vToggle && gnonToggle) {
    // image(v, 608, 330);
  }

  if (zToggle && gnonToggle) {
    // image(z, 608, 330);
  }

  ////////////cakes and toppings
  //sparks
  if (cToggle && tcToggle) {
    // image(cc, 608, 330);
  }
  if (vToggle && tcToggle) {
    // image(, 608, 330);
  }
  if (zToggle && tcToggle) {
    // image(z, 608, 330);
  }

  //fruit
  if (cToggle && tfToggle) {
    // image(cc, 608, 330);
  }
  if (vToggle && tfToggle) {
    // image(, 608, 330);
  }
  if (zToggle && tfToggle) {
    // image(z, 608, 330);
  }

  //without topping
  if (cToggle && tnonToggle) {
    // image(cc, 608, 330);
  }
  if (vToggle && tnonToggle) {
    // image(, 608, 330);
  }
  if (zToggle && tnonToggle) {
    // image(z, 608, 330);
  }

  //////////cakes, glaces and toppings

  /////SPARKS TOPPING

  //dark and sparks
  if (cToggle && gcToggle && tcToggle) {
    // image(cc, 608, 330);
  }
  if (vToggle && gcToggle && tcToggle) {
    // image(, 608, 330);
  }
  if (zToggle && gcToggle && tcToggle) {
    // image(z, 608, 330);
  }

  //white and sparks
  if (cToggle && gbToggle && tcToggle) {
    // image(cc, 608, 330);
  }
  if (vToggle && gbToggle && tcToggle) {
    // image(, 608, 330);
  }
  if (zToggle && gbToggle && tcToggle) {
    // image(z, 608, 330);
  }

  //without glace and with sparks
  if (cToggle && gnonToggle && tcToggle) {
    // image(c, 608, 330);
  }

  if (vToggle && gnonToggle && tcToggle) {
    // image(v, 608, 330);
  }

  if (zToggle && gnonToggle && tcToggle) {
    // image(z, 608, 330);
  }


  /////FRUIT TOPPING

  //dark and sparks
  if (cToggle && gcToggle && tfToggle) {
    // image(cc, 608, 330);
  }
  if (vToggle && gcToggle && tfToggle) {
    // image(, 608, 330);
  }
  if (zToggle && gcToggle && tfToggle) {
    // image(z, 608, 330);
  }

  //white and sparks
  if (cToggle && gbToggle && tfToggle) {
    // image(cc, 608, 330);
  }
  if (vToggle && gbToggle && tfToggle) {
    // image(, 608, 330);
  }
  if (zToggle && gbToggle && tfToggle) {
    // image(z, 608, 330);
  }

  //without glace and with sparks
  if (cToggle && gnonToggle && tfToggle) {
    // image(c, 608, 330);
  }

  if (vToggle && gnonToggle && tfToggle) {
    // image(v, 608, 330);
  }

  if (zToggle && gnonToggle && tfToggle) {
    // image(z, 608, 330);
  }




  //coords
  fill(0);
  text(" " + mouseX + ", " + mouseY, mouseX, mouseY);
}

function mousePressed() {

  ////////cake flavor

  //chocolate


  //x1,y1,x2,y2
  if (mouseX > 980 && mouseY > 80 && mouseX < 1010 && mouseY < 87) {
    cToggle = true;

  }


  //vanilla


  //carrot



  ////////cake glace

  //dark chocolate
  //white chocolate
  //fruit
  //without glace



  /////////cake topping

  //chocolate sparks
  //fruit
  //without topping
}