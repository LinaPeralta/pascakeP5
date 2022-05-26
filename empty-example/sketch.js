//toggles
//flavor
let cToggle;
let cbToggle;
let cbcToggle ;
let cbfToggle ;
let ccToggle;
let cccToggle ;
let ccfToggle;
let cfToggle;
let cfcToggle ;
let cncToggle ;
let cnfToggle ;
let vToggle;
let vbToggle;
let vfToggle;
let vbcToggle ;
let vbfToggle ;
let vcToggle;
let vccToggle ;
let vcfToggle ;
let vfcToggle ;
let vffToggle ;
let vncToggle ;
let vnfToggle ;
let zToggle;
let zbToggle;
let zbcToggle ;
let zbfToggle ;
let zcToggle;
let zccToggle ;
let zcfToggle ;
let zfToggle;
let zfcToggle ;
let zffToggle ;
let zncToggle ;
let znfToggle ;



let menu;
//cakes images
let c, cb, cbc, cbf, cc, ccc, ccf, cf, cfc, cff, cnc, cnf, v, vf, vfc, vb, vbc, vbf, vc, vcc, vcf, vff, vnc, vnf, z, zb, zbc, zbf, zc, zcc, zcf, zf, zfc, zff, znc, znf;

let checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox7, checkbox8, checkbox9, checkbox10;

window.setup = function setup() {

  createCanvas(1435, 700);


  cToggle =false;
  cbToggle =false;
  cbcToggle = false;
  cbfToggle = false;
  ccToggle =false;
  cccToggle = false;
  ccfToggle =false;
  cfToggle =false;
  cfcToggle = false;
  cncToggle = false;
  cnfToggle = false;
  vToggle =false;
  vbToggle =false;
  vfToggle =false;
  vbcToggle = false;
  vbfToggle = false;
  vcToggle =false;
  vccToggle = false;
  vcfToggle = false;
  vfToggle =false;
  vfcToggle = false;
  vffToggle = false;
  vncToggle = false;
  vnfToggle = false;
  zToggle =false;
  zbToggle =false;
  zbcToggle = false;
  zbfToggle = false;
  zcToggle =false;
  zccToggle = false;
  zcfToggle = false;
  zfToggle =false;
  zfcToggle = false;
  zffToggle = false;
  zncToggle = false;
  znfToggle = false;


  //lateral menu
  menu = loadImage("../img/menu.png");

  //cakes image
  c = loadImage("../img/c.png");
  cb = loadImage("../img/cb.png");
  cbc = loadImage("../img/cbc.png");
  cbf = loadImage("../img/cbf.png");
  cc = loadImage("../img/cc.png");
  ccc = loadImage("../img/ccc.png");
  ccf = loadImage("../img/ccf.png")
  cf = loadImage("../img/cf.png");
  cfc = loadImage("../img/cfc.png");
  cnc = loadImage("../img/cnc.png");
  cnf = loadImage("../img/cnf.png");
  v = loadImage("../img/v.png");
  vb = loadImage("../img/vb.png");
  vf = loadImage("../img/vf.png");
  vbc = loadImage("../img/vbc.png");
  vbf = loadImage("../img/vbf.png");
  vc = loadImage("../img/vc.png");
  vcc = loadImage("../img/vcc.png");
  vcf = loadImage("../img/vcf.png");
  vf = loadImage("../img/vf.png");
  vfc = loadImage("../img/vfc.png");
  vff = loadImage("../img/vff.png");
  vnc = loadImage("../img/vnc.png");
  vnf = loadImage("../img/vnf.png");
  z = loadImage("../img/z.png");
  zb = loadImage("../img/zb.png");
  zbc = loadImage("../img/zbc.png");
  zbf = loadImage("../img/zbf.png");
  zc = loadImage("../img/zc.png");
  zcc = loadImage("../img/zcc.png");
  zcf = loadImage("../img/zcf.png");
  zf = loadImage("../img/zf.png");
  zfc = loadImage("../img/zfc.png");
  zff = loadImage("../img/zff.png");
  znc = loadImage("../img/znc.png");
  znf = loadImage("../img/znf.png");

  ///////checkbox

  checkbox1 = createCheckbox('', false);
  checkbox2 = createCheckbox('', false);
  checkbox3 = createCheckbox('', false);
  checkbox4 = createCheckbox('', false);
  checkbox5 = createCheckbox('', false);
  checkbox6 = createCheckbox('', false);
  checkbox7 = createCheckbox('', false);
  checkbox8 = createCheckbox('', false);
  checkbox9 = createCheckbox('', false);
  checkbox10 = createCheckbox('', false);


  // Position the checkbox object
  checkbox1.position(1060, 132);
  checkbox2.position(1060, 165);
  checkbox3.position(1060, 198);
  checkbox4.position(1060, 288);
  checkbox5.position(1060, 322);
  checkbox6.position(1060, 355);
  checkbox7.position(1060, 388);
  checkbox8.position(1060, 475);
  checkbox9.position(1060, 507);
  checkbox10.position(1060, 539);


  // Call the change_bg() function when the box
  // is checked or unchecked
  checkbox1.changed(changeCake);
  checkbox2.changed(changeCake);
  checkbox3.changed(changeCake);
  checkbox4.changed(changeCake);
  checkbox5.changed(changeCake);
  checkbox6.changed(changeCake);
  checkbox7.changed(changeCake);
  checkbox8.changed(changeCake);
  checkbox9.changed(changeCake);
  checkbox10.changed(changeCake);
}

window.draw = function draw() {
  background(242, 237, 240);

  image(menu, 960, 30)
  menu.resize(404, 640);

  //conditionals for paint images 

  //////////only cakes
  if (cToggle) {
    image(c, 160, 150);
  }

  if (vToggle) {
    image(v, 160, 150);
  }

  if (zToggle) {
    image(z, 160, 150);
  }

  ///////////cakes and glace

  //chocolate glace
  //dark
  if (ccToggle) {
    image(cc, 160, 150);
  }
  if (vcToggle) {
    mage(vc, 160, 150);
  }
  if (zcToggle) {
    image(zc, 160, 150);
  }

  //white
  if (cbToggle) {
    image(cb, 160, 150);
  }
  if (vbToggle) {
    image(vb, 160, 150);
  }
  if (zbToggle) {
    image(z, 160, 150);
  }


  ////////////cakes and toppings without glace
  //sparks
  if (cncToggle) {
    image(cnc, 160, 150);
  }
  if (vncToggle) {
    image(vnc, 160, 150);
  }
  if (zncToggle) {
    image(znc, 160, 150);
  }

  //fruit
  if (cnfToggle) {
    image(cnf, 160, 150);
  }
  if (vnfToggle) {
    image(vnf, 160, 150);
  }
  if (znfToggle) {
    image(znf, 160, 150);
  }

  //////////cakes, glaces and toppings

  /////SPARKS TOPPING

  //dark and sparks
  if (cccToggle) {
    image(ccc, 160, 150);
  }
  if (vccToggle) {
    image(vcc, 160, 150);
  }
  if (zccToggle) {
    image(zcc, 160, 150);
  }

  //white and sparks
  if (cbcToggle) {
    image(cbc, 160, 150);
  }
  if (vbcToggle) {
    image(vbc, 160, 150);
  }
  if (zbcToggle) {
    image(zbc, 160, 150);
  }

  //without glace and with sparks
  if (cncToggle) {
    image(cnc, 160, 150);
  }

  if (vncToggle) {
    image(v, 160, 150);
  }

  if (zncToggle) {
    image(znc, 160, 150);
  }


  /////FRUIT TOPPING

  //dark and sparks
  if (ccfToggle) {
     image(ccf, 160, 150);
  }
  if (vcfToggle) {
     image(vcf, 160, 150);
  }
  if (zcfToggle) {
     image(zcf, 160, 150);
  }

  //white and sparks
  if (cbfToggle) {
   image(cbf, 160, 150);
  }
  if (vbfToggle) {
   image(vbf, 160, 150);
  }
  if (zbfToggle) {
    image(zbf, 160, 150);
  }

  //coords
  fill(0);
  text(" " + mouseX + ", " + mouseY, mouseX, mouseY);
}

//function to change cake image
function changeCake() {

  //chocolate cake
  if (checkbox1.checked()) {
    cToggle = true;
  } else {
    cToggle = false;
  }

  //vanilla cake
  if (checkbox2.checked()) {
    vToggle = true;
  } else {
    vToggle = false;
  }

  //carrot cake
  if (checkbox3.checked()) {
    zToggle = true;
  } else {
    zToggle = false;
  }

  //////glace
  // dark chocolate glace
  if (checkbox1.checked() && checkbox4.checked()) {
    ccToggle = true;
  } else {
    ccToggle = false;
  }

}
