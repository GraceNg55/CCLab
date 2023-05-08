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
fpetals = new flowerPetals(100, 90);
fbody = new flowerBody(100, 280);
feyes = new flowerEyes(100, 565);
fmouth = new flowerMouth(100, 470);
fblush = new flowerBlush(100, 530);
let angle = 10;
let angleInRadians = radians(angle);

//googoo
ghat = new googooHat(1100, 50);
gbody = new googooBody(1100, 170);
geyes = new googooEyes(1100, 540);
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

      fill(255);
      circle(0,0,5);

      noFill();
      stroke(0);
      rect(-130,-130,260,260)
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

      fill(0);
      circle(0,0,5);

      noFill();
      stroke(0);
      rect(-100,-150,200,350)
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

      fill(255);
      circle(0,0,5);

      noFill();
      stroke(0);
      rect(-70,-20,140,40)
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

      fill(255);
      circle(0,0,5);

      noFill();
      stroke(0);
      rect(-20,-15,40,25)
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

      fill(255);
      circle(0,0,5);

      noFill();
      stroke(0);
      rect(-65,-10,130,25)
      
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 65 &&
        mouseX < this.x + 65 &&
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

      fill(255);
      circle(0,0,5);

      noFill();
      stroke(0);
      rect(-40,-25,80,55)
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

      fill(255);
      circle(0,0,5);

      noFill();
      stroke(0);
      rect(-110,-150,220,395)
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

      fill(255);
      circle(0,0,5);

      noFill();
      stroke(0);
      rect(-70,-20,140,40)
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

      fill(0);
      circle(0,0,5);

      noFill();
      stroke(0);
      rect(-20,-10,40,25)
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

      fill(255);
      circle(0,0,5);

      noFill();
      stroke(0);
      rect(-65,-10,130,25)
      pop();
    }
    checkMousePressed() {
      if (
        mouseX > this.x - 65 &&
        mouseX < this.x + 65 &&
        mouseY > this.y - 0 &&
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
    let parts = [ghat, fpetals, gblush, fblush, gmouth, fmouth, geyes, feyes, gbody, fbody];

    for(let i = 0; i < 5; i++){
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

 