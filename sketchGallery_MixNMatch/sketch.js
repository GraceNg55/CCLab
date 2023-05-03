//flower
let fbody;
let feyes;
let fmouth;
let fblush;
let fpetals;

//googoo
let gbody;
let geyes;
let gmouth;
let gblush;
let ghat;

function setup(){
    let cnv = createCanvas(1200, 600);
    cnv.parent("canvasContainer");

//flower
fpetals = new flowerPetals(100, 130);
fbody = new flowerBody(100, 280);
feyes = new flowerEyes(100, 600);
fmouth = new flowerMouth(100, 470);
fblush = new flowerBlush(100, 530);
let angle = 10;
let angleInRadians = radians(angle);

//googoo
ghat = new googooHat(1100, 140);
gbody = new googooBody(1100, 170);
geyes = new googooEyes(1100, 580);
gmouth = new googooMouth(1100, 400);
gblush = new googooBlush(1100, 480);

}

function draw(){
    background(255, 140, 159);

    noStroke();
    fill(252, 88, 116);
    rect(0, 0, 200, 600);
    rect(1000, 0, 200, 600);
  
    //bodies
    fbody.update();
    fbody.display();
    gbody.update();
    gbody.display();
    
    //eyes
    feyes.update();
    feyes.display();
    geyes.update();
    geyes.display();
    
    //mouths
    fmouth.update();
    fmouth.display();
    gmouth.update();
    gmouth.display();
    
    //blushes
    fblush.update();
    fblush.display();
    gblush.update();
    gblush.display();
    
    //other
    fpetals.update();
    fpetals.display();
    ghat.update();
    ghat.display();

}


class flowerPetals {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.65;
      this.dragg = false;
    }
  
    update() {
      if (this.dragg == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      scale(this.scale);
      noStroke();
      fill(250, 238, 10);
      for (let i = 0; i < 16; i++) {
        push();
        translate(0, -60);
        rotate(((PI * 2) / 16) * i);
        circle(0 - 100, 0, 50);
        pop();
      }
      // noFill();
      // stroke(0);
      // rect(-130,-190,260,260)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 130 &&
        mouseX < this.x + 130 &&
        mouseY > this.y - 190 &&
        mouseY < this.y + 70
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class flowerBody {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.65;
      this.dragg = false;
    }
  
    update() {
      if (this.dragg == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      scale(this.scale);
      noStroke();
      fill(79, 255, 25);
      ellipse(0, 80, 180, 80);
      arc(0, 50, 100, 300, PI, 2 * PI);
      arc(0, 50, 100, 300, 0, PI);
      fill(255, 252, 230);
      circle(0, -60, 180);
      // noFill();
      // stroke(0);
      // rect(-100,-150,200,350)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 100 &&
        mouseX < this.x + 100 &&
        mouseY > this.y - 150 &&
        mouseY < this.y + 200
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class flowerEyes {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.65;
      this.dragg = false;
    }
  
    update() {
      if (this.dragg == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      scale(this.scale);
      noStroke();
      fill("black");
      circle(-50, -60, 30);
      circle(50, -60, 30);
      // noFill();
      // stroke(0);
      // rect(-70,-80,140,40)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 70 &&
        mouseX < this.x + 70 &&
        mouseY > this.y - 80 &&
        mouseY < this.y - 40
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class flowerMouth {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.65;
      this.dragg = false;
    }
  
    update() {
      if (this.dragg == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      scale(this.scale);
      noStroke();
      fill("black");
      arc(0, -40, 30, 30, 0, PI);
      // noFill();
      // stroke(0);
      // rect(-20,-45,40,25)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 20 &&
        mouseX < this.x + 20 &&
        mouseY > this.y - 45 &&
        mouseY < this.y - 20
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class flowerBlush {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.65;
      this.dragg = false;
    }
  
    update() {
      if (this.dragg == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      scale(this.scale);
      noStroke();
      fill(255, 36, 61);
      ellipse(-50, -38, 20, 10);
      ellipse(50, -38, 20, 10);
      // noFill();
      // stroke(0);
      // rect(-65,-50,130,25)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 65 &&
        mouseX < this.x + 65 &&
        mouseY > this.y - 50 &&
        mouseY < this.y - 25
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class googooHat {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.65;
      this.dragg = false;
    }
  
    update() {
      if (this.dragg == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      scale(this.scale);
      noStroke();
      fill(0);
      rect(-25, -190, 50, 50);
      ellipse(0, -150, 80, 30);
      fill("pink");
      ellipse(0, -165, 50, 5);
      // noFill();
      // stroke(0);
      // rect(-40,-190,80,55)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 40 &&
        mouseX < this.x + 40 &&
        mouseY > this.y - 190 &&
        mouseY < this.y - 35
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class googooBody {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.65;
      this.dragg = false;
    }
  
    update() {
      if (this.dragg == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      scale(this.scale);
      noStroke();
      fill(92, 250, 218);
      ellipse(0, 80, 220, 110);
      circle(0, 125, 200);
      arc(-45, 185, 70, 120, 0, PI);
      arc(45, 185, 70, 120, 0, PI);
      fill(255, 186, 188);
      ellipse(0, 136, 90, 80);
      fill(92, 250, 218);
      circle(0, -60, 180);
      rect(48, -120, 50, 10, 10);
      circle(98, -115, 18);
      rect(-98, -120, 50, 10, 10);
      circle(-98, -115, 18);
      // noFill();
      // stroke(0);
      // rect(-110,-150,220,395)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 110 &&
        mouseX < this.x + 110 &&
        mouseY > this.y - 150 &&
        mouseY < this.y + 215
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class googooEyes {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.65;
      this.dragg = false;
    }
  
    update() {
      if (this.dragg == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      scale(this.scale);
      noStroke();
      fill("white");
      circle(-50, -60, 30);
      circle(50, -60, 30);
      fill("black");
      circle(-44, -60, 15);
      circle(56, -60, 15);
      // noFill();
      // stroke(0);
      // rect(-70,-80,140,40)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 70 &&
        mouseX < this.x + 70 &&
        mouseY > this.y - 80 &&
        mouseY < this.y - 40
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class googooMouth {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.65;
      this.dragg = false;
    }
  
    update() {
      if (this.dragg == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      scale(this.scale);
      noStroke();
      fill("white");
      arc(-5, -40, 15, 30, 0, PI);
      arc(5, -40, 15, 30, 0, PI);
      // noFill();
      // stroke(0);
      // rect(-20,-45,40,25)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 20 &&
        mouseX < this.x + 20 &&
        mouseY > this.y - 45 &&
        mouseY < this.y - 20
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class googooBlush {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.65;
      this.dragg = false;
    }
  
    update() {
      if (this.dragg == true) {
        this.x = mouseX;
        this.y = mouseY;
      }
    }
  
    display() {
      push();
      translate(this.x, this.y);
      scale(this.scale);
      noStroke();
      fill(255, 186, 188);
      ellipse(-50, -35, 20, 10);
      ellipse(50, -35, 20, 10);
      // noFill();
      // stroke(0);
      // rect(-65,-50,130,25)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 65 &&
        mouseX < this.x + 65 &&
        mouseY > this.y - 50 &&
        mouseY < this.y - 25
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  function mousePressed() {
    console.log("hi");
  
    //flower
    fbody.checkMousePressed();
    feyes.checkMousePressed();
    fmouth.checkMousePressed();
    fblush.checkMousePressed();
    fpetals.checkMousePressed();
  
    //googoo
    gbody.checkMousePressed();
    geyes.checkMousePressed();
    gmouth.checkMousePressed();
    gblush.checkMousePressed();
    ghat.checkMousePressed();
  
  }
  
  function mouseReleased() {
    console.log("hello");
  
    fbody.disableDragg();
    feyes.disableDragg();
    fmouth.disableDragg();
    fblush.disableDragg();
    fpetals.disableDragg();
  
    //googoo
    gbody.disableDragg();
    geyes.disableDragg();
    gmouth.disableDragg();
    gblush.disableDragg();
    ghat.disableDragg();
  
  }
  