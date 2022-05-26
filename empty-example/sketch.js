//toggles
//flavor
let cToggle;
let cbToggle;
let cbcToggle;
let cbfToggle;
let ccToggle;
let cccToggle;
let ccfToggle;
let cffToggle;
let cfToggle;
let cfcToggle;
let cncToggle;
let cnfToggle;
let vToggle;
let vbToggle;
let vfToggle;
let vbcToggle;
let vbfToggle;
let vcToggle;
let vccToggle;
let vcfToggle;
let vfcToggle;
let vffToggle;
let vncToggle;
let vnfToggle;
let zToggle;
let zbToggle;
let zbcToggle;
let zbfToggle;
let zcToggle;
let zccToggle;
let zcfToggle;
let zfToggle;
let zfcToggle;
let zffToggle;
let zncToggle;
let znfToggle;


let menu;
let logo;
//cakes images
let c, cb, cbc, cbf, cc, ccc, ccf, cf, cfc, cff, cnc, cnf, v, vf, vfc, vb, vbc, vbf, vc, vcc, vcf, vff, vnc, vnf, z, zb, zbc, zbf, zc, zcc, zcf, zf, zfc, zff, znc, znf;

let checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox8, checkbox9;

window.setup = function setup() {

  createCanvas(1435, 700);


  cToggle = false;
  cbToggle = false;
  cbcToggle = false;
  cbfToggle = false;
  ccToggle = false;
  cccToggle = false;
  ccfToggle = false;
  cfToggle = false;
  cfcToggle = false;
  cncToggle = false;
  cnfToggle = false;
  vToggle = false;
  vbToggle = false;
  vfToggle = false;
  vbcToggle = false;
  vbfToggle = false;
  vcToggle = false;
  vccToggle = false;
  vcfToggle = false;
  vfToggle = false;
  vfcToggle = false;
  vffToggle = false;
  vncToggle = false;
  vnfToggle = false;
  zToggle = false;
  zbToggle = false;
  zbcToggle = false;
  zbfToggle = false;
  zcToggle = false;
  zccToggle = false;
  zcfToggle = false;
  zfToggle = false;
  zfcToggle = false;
  zffToggle = false;
  zncToggle = false;
  znfToggle = false;


  //lateral menu
  menu = loadImage("../img/menu.png");
  //logo
  logo = loadImage("../img/logo2.png");

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
  cff = loadImage("../img/cff.png");
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
  checkbox8 = createCheckbox('', false);
  checkbox9 = createCheckbox('', false);



  // Position the checkbox object
  checkbox1.position(1060, 132);
  checkbox2.position(1060, 165);
  checkbox3.position(1060, 198);
  checkbox4.position(1060, 288);
  checkbox5.position(1060, 322);
  checkbox6.position(1060, 355);
  checkbox8.position(1060, 475);
  checkbox9.position(1060, 507);



  // Call the change_bg() function when the box
  // is checked or unchecked
  checkbox1.changed(changeCake);
  checkbox2.changed(changeCake);
  checkbox3.changed(changeCake);
  checkbox4.changed(changeCake);
  checkbox5.changed(changeCake);
  checkbox6.changed(changeCake);
  checkbox8.changed(changeCake);
  checkbox9.changed(changeCake);
}

window.draw = function draw() {
  background(242, 237, 240);

  image(menu, 960, 30)
  menu.resize(404, 640);
  
  image(logo,40,30);
  logo.resize(150,150);

  //conditionals for paint images 

  //////////only cakes

  if (cToggle) {
    image(c, 160, 220);
  }

  if (vToggle) {
    image(v, 160, 220);
  }

  if (zToggle) {
    image(z, 160, 220);
  }

  ///////////cakes and glace

  //chocolate glace
  //dark
  if (ccToggle) {
    image(cc, 160, 220);
  }
  if (vcToggle) {
    image(vc, 160, 220);
  }
  if (zcToggle) {
    image(zc, 160, 220);
  }

  //white
  if (cbToggle) {
    image(cb, 160, 220);
  }
  if (vbToggle) {
    image(vb, 160, 220);
  }
  if (zbToggle) {
    image(zb, 160, 220);
  }

  //fruits
  if (cfToggle) {
    image(cf, 160, 220);
  }
  if (vfToggle) {
    image(vf, 160, 220);
  }
  if (zfToggle) {
    image(zf, 160, 220);
  }


  ////////////cakes and toppings without glace
  //sparks
  if (cncToggle) {
    image(cnc, 160, 220);
  }
  if (vncToggle) {
    image(vnc, 160, 220);
  }
  if (zncToggle) {
    image(znc, 160, 220);
  }

  //fruit
  if (cnfToggle) {
    image(cnf, 160, 220);
  }
  if (vnfToggle) {
    image(vnf, 160, 220);
  }
  if (znfToggle) {
    image(znf, 160, 220);
  }

  //////////cakes, glaces and toppings

  /////SPARKS TOPPING

  //dark and sparks
  if (cccToggle) {
    image(ccc, 160, 220);
  }
  if (vccToggle) {
    image(vcc, 160, 220);
  }
  if (zccToggle) {
    image(zcc, 160, 220);
  }

  //white and sparks
  if (cbcToggle) {
    image(cbc, 160, 220);
  }
  if (vbcToggle) {
    image(vbc, 160, 220);
  }
  if (zbcToggle) {
    image(zbc, 160, 220);
  }

  //without glace and with sparks
  if (cncToggle) {
    image(cnc, 160, 220);
  }

  if (vncToggle) {
    image(vnc, 160, 220);
  }

  if (zncToggle) {
    image(znc, 160, 220);
  }


  /////FRUIT TOPPING

  //dark and sparks
  if (ccfToggle) {
    image(ccf, 160, 220);
  }
  if (vcfToggle) {
    image(vcf, 160, 220);
  }
  if (zcfToggle) {
    image(zcf, 160, 220);
  }

  //white and sparks
  if (cbfToggle) {
    image(cbf, 160, 220);
  }
  if (vbfToggle) {
    image(vbf, 160, 220);
  }
  if (zbfToggle) {
    image(zbf, 160, 220);
  }

  //fruits
  if (cfcToggle) {
    image(cfc, 160, 220);
  }

  if (cffToggle) {
    image(cff, 160, 220);
  }
  if (vfcToggle) {
    image(vfc, 160, 220);
  }
  if (zfcToggle) {
    image(zfc, 160, 220);
  }

  if (zffToggle) {
    image(zff, 160, 220);
  }
  //coords
  fill(0);
  text(" " + mouseX + ", " + mouseY, mouseX, mouseY);
}

//function to change cake image
function changeCake() {

  chocolateCake();
  vanillaCake();
  carrotCake();

  

}

//functions with conditionals 
function chocolateCake(){

   //chocolate cake
   if (checkbox1.checked()) {
    cToggle = true;
  } else {
    cToggle = false;
  }

   ///////////glace 

  ///choclate cakes
  // dark chocolate glace
  if (checkbox1.checked() && checkbox4.checked()) {
    cToggle = false;
    ccToggle = true;
  } else {
    ccToggle = false;
  }

  //white chocolate
  if (checkbox1.checked() && checkbox5.checked()) {
    cToggle = false;
    cbToggle = true;
  } else {
    cbToggle = false;
  }

  //fruit
  if (checkbox1.checked() && checkbox6.checked()) {
    cToggle = false;
    cfToggle = true;
  } else {
    cfToggle = false;
  }

  ///toppings cake without glace
  
   //sparks
   if (checkbox1.checked() && checkbox8.checked()) {
    cToggle = false;
    cncToggle = true;
  } else {
    cncToggle = false;
  }

  //fuit
  if (checkbox1.checked() && checkbox9.checked()) {
    cToggle = false;
    cnfToggle = true;
  } else {
    cnfToggle = false;
  }

///////////////////////////////////////////////////////////three combo

/////////////only chocolate cake flavor

//choclate with dark chocolate and sparks
if (checkbox1.checked() &&  checkbox4.checked() && checkbox8.checked()) {
  cToggle=false;
  ccToggle=false;
  cncToggle=false;

  cccToggle = true;
} else {
  cccToggle = false;
}


//choclate with white chocolate and sparks
if (checkbox1.checked() &&  checkbox5.checked() && checkbox8.checked()) {
  cToggle=false;
  cbToggle=false;
  cncToggle=false;

  cbcToggle = true;
} else {
  cbcToggle = false;
}

//choclate with fruit and sparks
if (checkbox1.checked() &&  checkbox6.checked() && checkbox8.checked()) {
  cToggle=false;
  cfToggle=false;
  cncToggle=false;

  cfcToggle = true;
} else {
  cfcToggle = false;
}

///choclate with dark chocolate and fruit
if (checkbox1.checked() &&  checkbox4.checked() && checkbox9.checked()) {
  cToggle=false;
  ccToggle=false;
  cnfToggle=false;

  ccfToggle = true;
} else {
  ccfToggle = false;
}

///choclate with dark chocolate and fruit
if (checkbox1.checked() &&  checkbox5.checked() && checkbox9.checked()) {
  cToggle=false;
  cbToggle=false;
  cnfToggle=false;

  cbfToggle = true;
} else {
  cbfToggle = false;
}

///choclate with dark chocolate and fruit
if (checkbox1.checked() &&  checkbox6.checked() && checkbox9.checked()) {
  cToggle=false;
  cfToggle=false;
  cnfToggle=false;

  cffToggle = true;
} else {
  cffToggle = false;
}
}

function vanillaCake(){

  if (checkbox2.checked()) {
    vToggle = true;
  } else {
    vToggle = false;
  }

  ////////vanilla cakes

   // dark chocolate glace
   if (checkbox2.checked() && checkbox4.checked()) {
    vToggle = false;
    vcToggle = true;
  } else {
    vcToggle = false;
  }

  //white chocolate
  if (checkbox2.checked() && checkbox5.checked()) {
    vToggle = false;
    vbToggle = true;
  } else {
    vbToggle = false;
  }

  //fruit
  if (checkbox2.checked() && checkbox6.checked()) {
    vToggle = false;
    vfToggle = true;
  } else {
    vfToggle = false;
  }

  ///toppings cake without glace
  
   //sparks
   if (checkbox2.checked() && checkbox8.checked()) {
    vToggle = false;
    vncToggle = true;
  } else {
    vncToggle = false;
  }

  //fuit
  if (checkbox2.checked() && checkbox9.checked()) {
    vToggle = false;
    vnfToggle = true;
  } else {
    vnfToggle = false;
  }

//////////////////////////////three combo
/////////////only vanilla cake flavor

//choclate with dark chocolate and sparks
if (checkbox2.checked() &&  checkbox4.checked() && checkbox8.checked()) {
  vToggle=false;
  vcToggle=false;
  vncToggle=false;

  vccToggle = true;
} else {
  vccToggle = false;
}


//choclate with white chocolate and sparks
if (checkbox2.checked() &&  checkbox5.checked() && checkbox8.checked()) {
  vToggle=false;
  vbToggle=false;
  vncToggle=false;

  vbcToggle = true;
} else {
  vbcToggle = false;
}

//choclate with fruit and sparks
if (checkbox2.checked() &&  checkbox6.checked() && checkbox8.checked()) {
  vToggle=false;
  vfToggle=false;
  vncToggle=false;

  vfcToggle = true;
} else {
  vfcToggle = false;
}

///choclate with dark chocolate and fruit
if (checkbox2.checked() &&  checkbox4.checked() && checkbox9.checked()) {
  vToggle=false;
  vcToggle=false;
  vnfToggle=false;

  vcfToggle = true;
} else {
  vcfToggle = false;
}

///choclate with dark chocolate and fruit
if (checkbox2.checked() &&  checkbox5.checked() && checkbox9.checked()) {
  vToggle=false;
  vbToggle=false;
  vnfToggle=false;

  vbfToggle = true;
} else {
  vbfToggle = false;
}

///choclate with dark chocolate and fruit
if (checkbox2.checked() &&  checkbox6.checked() && checkbox9.checked()) {
  vToggle=false;
  vfToggle=false;
  vnfToggle=false;

  vffToggle = true;
} else {
  vffToggle = false;
}

}

function carrotCake() {

  if (checkbox3.checked()) {
    zToggle = true;
  } else {
    zToggle = false;
  }

   //////////////carrot cakes
  
   // dark chocolate glace
   if (checkbox3.checked() && checkbox4.checked()) {
    zToggle = false;
    zcToggle = true;
  } else {
    zcToggle = false;
  }

  //white chocolate
  if (checkbox3.checked() && checkbox5.checked()) {
    zToggle = false;
    zbToggle = true;
  } else {
    zbToggle = false;
  }

  //fruit
  if (checkbox3.checked() && checkbox6.checked()) {
    zToggle = false;
    zfToggle = true;
  } else {
    zfToggle = false;
  }

  ///toppings cake without glace
  
   //sparks
   if (checkbox3.checked() && checkbox8.checked()) {
    zToggle = false;
    zncToggle = true;
  } else {
    zncToggle = false;
  }

  //fuit
  if (checkbox3.checked() && checkbox9.checked()) {
    zToggle = false;
    znfToggle = true;
  } else {
    znfToggle = false;
  }

//////////////////////////////three combo
/////////////only  carrot cake flavor

//choclate with dark chocolate and sparks
if (checkbox3.checked() &&  checkbox4.checked() && checkbox8.checked()) {
  zToggle=false;
  zcToggle=false;
  zncToggle=false;

  zccToggle = true;
} else {
  zccToggle = false;
}


//choclate with white chocolate and sparks
if (checkbox3.checked() &&  checkbox5.checked() && checkbox8.checked()) {
  zToggle=false;
  zbToggle=false;
  zncToggle=false;

  zbcToggle = true;
} else {
  zbcToggle = false;
}

//choclate with fruit and sparks
if (checkbox3.checked() &&  checkbox6.checked() && checkbox8.checked()) {
  zToggle=false;
  zfToggle=false;
  zncToggle=false;

  zfcToggle = true;
} else {
  zfcToggle = false;
}

///choclate with dark chocolate and fruit
if (checkbox3.checked() &&  checkbox4.checked() && checkbox9.checked()) {
  zToggle=false;
  zcToggle=false;
  znfToggle=false;

  zcfToggle = true;
} else {
  zcfToggle = false;
}

///choclate with dark chocolate and fruit
if (checkbox3.checked() &&  checkbox5.checked() && checkbox9.checked()) {
  zToggle=false;
  zbToggle=false;
  znfToggle=false;

  zbfToggle = true;
} else {
zbfToggle = false;
}

///choclate with dark chocolate and fruit
if (checkbox3.checked() &&  checkbox6.checked() && checkbox9.checked()) {
  zToggle=false;
  zfToggle=false;
  znfToggle=false;

  zffToggle = true;
} else {
  zffToggle = false;
}

}
