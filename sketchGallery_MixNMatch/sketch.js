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

//lamby
let lbody;
let leyes;
let lmouth;
let lblush;
let lbow;

function setup(){
    let cnv = createCanvas(1200, 640);
    cnv.parent("canvasContainer");

//flower
fpetals = new flowerPetals(1100, 90);
fbody = new flowerBody(100, 280);
feyes = new flowerEyes(1100, 610);
fmouth = new flowerMouth(1100, 380);
fblush = new flowerBlush(1100, 410);
let angle = 10;
let angleInRadians = radians(angle);

//googoo
ghat = new googooHat(1100, 195);
gbody = new googooBody(100, 492);
geyes = new googooEyes(1100, 570);
gmouth = new googooMouth(1100, 340);
gblush = new googooBlush(1100, 450);

 //lamby
 lbow = new LambyBow(1100, 240);
 lbody = new LambyBody(100, 125);
 leyes = new LambyEyes(1100, 530);
 lmouth = new LambyMouth(1100, 295);
 lblush = new LambyBlush(1100, 490);

}

function draw(){
    background(255, 140, 159);

    noStroke();
    fill(252, 88, 116);
    rect(0, 0, 200, 640);
    rect(1000, 0, 200, 640);
  
    //bodies
  fbody.update();
  fbody.display();
  gbody.update();
  gbody.display();
  lbody.update();
  lbody.display();
  
  //eyes
  feyes.update();
  feyes.display();
  geyes.update();
  geyes.display();
  leyes.update();
  leyes.display();
  
  //mouths
  fmouth.update();
  fmouth.display();
  gmouth.update();
  gmouth.display();
  lmouth.update();
  lmouth.display();
  
  //blushes
  fblush.update();
  fblush.display();
  gblush.update();
  gblush.display();
  lblush.update();
  lblush.display();
  
  //other
  fpetals.update();
  fpetals.display();
  ghat.update();
  ghat.display();
  lbow.update();
  lbow.display();

    // fill(0);
    // text(mouseY + "  " + mouseY, mouseX, mouseY)

}


class flowerPetals {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 0.60;
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
        translate(0, 0);
        rotate(((PI * 2) / 16) * i);
        circle(0 - 100, 0, 50);
        pop();
      }

      // fill(255);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-130,-130,260,260)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 130 &&
        mouseX < this.x + 130 &&
        mouseY > this.y - 130 &&
        mouseY < this.y + 130
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
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
      this.scale = 0.60;
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

      // fill(0);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-100,-150,200,350)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 80 &&
        mouseX < this.x + 80 &&
        mouseY > this.y - 100 &&
        mouseY < this.y + 100
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
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
      this.scale = 0.60;
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
      circle(-50, 0, 30);
      circle(50, 0, 30);

      // fill(255);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-70,-20,140,40)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 70 &&
        mouseX < this.x + 70 &&
        mouseY > this.y - 20 &&
        mouseY < this.y + 20
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
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
      this.scale = 0.60;
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
      arc(0, -10, 30, 30, 0, PI);

      // fill(255);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-20,-15,40,25)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 20 &&
        mouseX < this.x + 20 &&
        mouseY > this.y - 15 &&
        mouseY < this.y + 10
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
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
      this.scale = 0.60;
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
      ellipse(-50, 0, 20, 10);
      ellipse(50, 0, 20, 10);

      // fill(255);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-65,-10,130,25)
      
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 50 &&
        mouseX < this.x + 50 &&
        mouseY > this.y - 10 &&
        mouseY < this.y + 15
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
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
      this.scale = 0.60;
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
      rect(-25, -25, 50, 50);
      ellipse(0, 15, 80, 30);
      fill("pink");
      ellipse(0, 0, 50, 5);

      // fill(255);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-40,-25,80,55)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 40 &&
        mouseX < this.x + 40 &&
        mouseY > this.y - 25 &&
        mouseY < this.y + 35
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
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
      this.scale = 0.60;
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

      // fill(255);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-110,-150,220,395)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 90 &&
        mouseX < this.x + 90 &&
        mouseY > this.y - 100 &&
        mouseY < this.y + 150
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
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
      this.scale = 0.60;
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
      circle(-50, 0, 30);
      circle(50, 0, 30);
      fill("black");
      circle(-44, 0, 15);
      circle(56, 0, 15);

      // fill(255);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-70,-20,140,40)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 65 &&
        mouseX < this.x + 65 &&
        mouseY > this.y - 20 &&
        mouseY < this.y + 20
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
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
      this.scale = 0.60;
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
      arc(-5, -5, 15, 30, 0, PI);
      arc(5, -5, 15, 30, 0, PI);

      // fill(0);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-20,-10,40,25)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 20 &&
        mouseX < this.x + 20 &&
        mouseY > this.y - 10 &&
        mouseY < this.y + 15
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
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
      this.scale = 0.60;
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
      ellipse(-50, 0, 20, 10);
      ellipse(50, 0, 20, 10);

      // fill(255);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-65,-10,130,25)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 65 &&
        mouseX < this.x + 65 &&
        mouseY > this.y - 10 &&
        mouseY < this.y + 25
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }

  class LambyMouth {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 1.4;
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
      fill(255, 235, 238);
      ellipse(0, 0, 25, 32);
      fill("black");
      ellipse(-4, -5, 6, 3);
      ellipse(4, -5, 6, 3);
      fill(255, 199, 207);
      ellipse(0, 0, 2, 14);
      ellipse(-4, 10, 6, 2);
      ellipse(4, 10, 6, 2);
  
      // fill(0);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-15,-20,30,40)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 15 &&
        mouseX < this.x + 30 &&
        mouseY > this.y - 20 &&
        mouseY < this.y + 40
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class LambyEyes {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 1.4;
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
      circle(-20, 0, 8);
      ellipse(-20, -3, 12, 3);
      circle(20, 0, 8);
      ellipse(20, -3, 12, 3);
  
      // fill(0);
      // circle(0,0,5);
      
      // noFill();
      // stroke(0);
      // rect(-30,-5,60,10)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 30 &&
        mouseX < this.x + 60 &&
        mouseY > this.y - 5 &&
        mouseY < this.y + 15
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class LambyBlush {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 1.4;
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
      fill(255, 224, 229);
      ellipse(-25, 0, 12, 8);
      ellipse(25, 0, 12, 8);

      // fill(0);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-35,-5,70,10)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 35 &&
        mouseX < this.x + 70 &&
        mouseY > this.y - 5 &&
        mouseY < this.y + 10
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  class LambyBow {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 1.4;
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
      stroke(8);
      fill(135, 34, 179);
      ellipse(-10,0,18,21);
      ellipse(10,0,18,21);
      circle(0,0,13);
      
      // fill(0);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-20,-10,40,20)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 20 &&
        mouseX < this.x + 40 &&
        mouseY > this.y - 10 &&
        mouseY < this.y + 20
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  
  class LambyBody {
    constructor(startX, startY, s) {
      this.x = startX;
      this.y = startY;
      this.scale = 1.4;
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
      //feet
      noStroke();
      fill(255, 199, 207);
      rect(-20, 15, 16, 32, 10);
      rect(5, 15, 16, 32, 10);
      //hands
      noStroke();
      fill(255, 199, 207);
      rect(10, -15, 40, 12, 20);
      rect(-50, -15, 40, 12, 20);
      //body
      noStroke();
      fill("white");
      ellipse(0, 0, 58, 60);
      //head
      noStroke();
      fill("white");
      ellipse(0, -50, 75, 75);
      //ears
      noStroke();
      fill("white");
      circle(-29, -80, 15);
      circle(29, -80, 15);
      fill(255, 224, 229);
      circle(-29, -80, 8);
      circle(29, -80, 8);
      //belly
      noStroke();
      fill(255, 224, 229);
      ellipse(0, 5, 25, 25);
      
      // fill(0);
      // circle(0,0,5);

      // noFill();
      // stroke(0);
      // rect(-50,-90,100,140)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 50 &&
        mouseX < this.x + 50 &&
        mouseY > this.y - 90 &&
        mouseY < this.y + 50
      ) {
        console.log("figure Pressed!");
        this.dragg = true;
        return true
      }else{
        return false
      }
    }
    disableDragg() {
      this.dragg = false;
    }
  }
  
  function mousePressed() {
    console.log("hi");
  
    //flower
    // fbody.checkMousePressed();
    // feyes.checkMousePressed();
    // fmouth.checkMousePressed();
    // fblush.checkMousePressed();
    // fpetals.checkMousePressed();
  
    //googoo
    // gbody.checkMousePressed();
    // geyes.checkMousePressed();
    // gmouth.checkMousePressed();
    // gblush.checkMousePressed();
    // ghat.checkMousePressed();
    let parts = [lbow, ghat, fpetals, lblush, gblush, fblush, lmouth, gmouth, fmouth, leyes, geyes, feyes, lbody, gbody, fbody];

    for(let i = 0; i < 15; i++){
      // console.log(parts[i])
      let returnValue = parts[i].checkMousePressed();
      if(returnValue == true){
        console.log("stopping the loop because the element printed below was clicked")
        console.log(parts[i])
        break;
      }
    }

  
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

    //lamby
    lbody.disableDragg();
    leyes.disableDragg();
    lmouth.disableDragg();
    lblush.disableDragg();
    lbow.disableDragg();
  
  }
  





// leon office hour
// a function can return a value 
// this is called "fruitful" function

  // function giveMeFive(){
  //   return true
  // }

  // let grace = giveMeFive();
  // console.log(grace)

  // function dotheMath(inputValue){
  //   let result = inputValue + 3;
  //   return result;
  // }

  // console.log( dotheMath(9)  )

 